#!/usr/bin/env python3
"""Automated QA of the rendered promo files → output/QA_REPORT.md + contact sheets.

Checks: duration window, resolution, frame rate, codecs, audio loudness / true peak,
unexpected black stretches, and a contact sheet of the beginning, transitions and CTA.
"""
import json
import re
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'output'
FILES = {'smartcare-megacode-hero.mp4': (1920, 1080), 'smartcare-megacode-vertical.mp4': (1080, 1920)}
SHEET_T = [0.5, 2.5, 4.5, 5.6, 7.5, 9.5, 12.5, 13.2, 15.0, 17.0, 19.5, 21.5, 23.6, 25.0, 26.8, 28.6, 30.4, 32.2,
           33.6, 35.5, 37.5, 39.4, 41.5, 43.4, 45.5, 47.5, 49.5, 51.5, 53.5, 54.6]


def probe(p):
    r = subprocess.run(['ffprobe', '-v', 'error', '-show_streams', '-show_format', '-of', 'json', str(p)], capture_output=True, text=True)
    return json.loads(r.stdout)


def loudness(p):
    r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', str(p), '-af', 'ebur128=peak=true', '-f', 'null', '-'], capture_output=True, text=True)
    s = r.stderr[r.stderr.rfind('Summary'):]
    i = re.search(r'I:\s+(-?[\d.]+) LUFS', s)
    tp = re.search(r'Peak:\s+(-?[\d.]+) dBFS', s)
    return float(i.group(1)) if i else None, float(tp.group(1)) if tp else None


def blacks(p):
    r = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', str(p), '-vf', 'blackdetect=d=0.25:pic_th=0.97', '-an', '-f', 'null', '-'], capture_output=True, text=True)
    return re.findall(r'black_start:([\d.]+) black_end:([\d.]+)', r.stderr)


def sheet(p, size, name):
    w = 384 if size[0] > size[1] else 216
    h = int(w * size[1] / size[0])
    cols = 6
    rows = (len(SHEET_T) + cols - 1) // cols
    im = Image.new('RGB', (cols * w, rows * (h + 22)), (20, 20, 24))
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', 14)
    tmp = ROOT / 'build' / 'qa_frame.png'
    for k, t in enumerate(SHEET_T):
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', str(t), '-i', str(p), '-frames:v', '1', str(tmp)], check=True)
        fr = Image.open(tmp).convert('RGB').resize((w, h), Image.LANCZOS)
        x, y = (k % cols) * w, (k // cols) * (h + 22)
        im.paste(fr, (x, y + 22))
        d.text((x + 6, y + 3), f'{t:05.2f}s', font=f, fill=(220, 220, 220))
    out = OUT / name
    im.save(out, quality=88)
    return out


def main():
    lines = ['# QA report — SmartCare Megacode promo', '']
    ok_all = True
    for fn, size in FILES.items():
        p = OUT / fn
        if not p.exists():
            lines += [f'## {fn}', '', '**missing**', '']
            ok_all = False
            continue
        j = probe(p)
        v = next(s for s in j['streams'] if s['codec_type'] == 'video')
        a = next((s for s in j['streams'] if s['codec_type'] == 'audio'), None)
        dur = float(j['format']['duration'])
        fps = eval(v['r_frame_rate'])
        lufs, tp = loudness(p)
        bl = blacks(p)
        checks = [
            ('Duration 45–60 s', 45 <= dur <= 60, f'{dur:.2f} s'),
            (f'Resolution {size[0]}×{size[1]}', (v['width'], v['height']) == size, f"{v['width']}×{v['height']}"),
            ('30 fps', abs(fps - 30) < 0.01, f'{fps:.3f}'),
            ('H.264 video', v['codec_name'] == 'h264', f"{v['codec_name']} {v.get('profile', '')} {v['pix_fmt']}"),
            ('AAC audio', a is not None and a['codec_name'] == 'aac', f"{a['codec_name']} {a['sample_rate']} Hz {a['channels']} ch" if a else 'none'),
            ('Loudness ≈ −16 LUFS', lufs is not None and -17.5 <= lufs <= -14.5, f'{lufs} LUFS'),
            ('True peak ≤ −1 dBTP', tp is not None and tp <= -0.9, f'{tp} dBFS'),
            ('No black gaps > 0.25 s except the planned fade-out', all(float(s) > 54.0 for s, e in bl), ', '.join(f'{float(s):.2f}–{float(e):.2f}' for s, e in bl) or 'none'),
        ]
        sh = sheet(p, size, fn.replace('.mp4', '_contact.jpg'))
        lines += [f'## {fn}', '', '| Check | Result | Value |', '|---|---|---|']
        for name, ok, val in checks:
            ok_all &= ok
            lines.append(f"| {name} | {'✅' if ok else '❌'} | {val} |")
        lines += ['', f'Contact sheet: `{sh.name}`', '']
    (OUT / 'QA_REPORT.md').write_text('\n'.join(lines) + '\n')
    print('\n'.join(lines))
    print('ALL OK' if ok_all else 'SOME CHECKS FAILED')


if __name__ == '__main__':
    main()
