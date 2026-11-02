# Contact sheet: python -I sheet.py <batch> <out.jpg> [ids...]  Tiles are labelled with the file name.
import sys,glob,os,re
from PIL import Image,ImageDraw,ImageFont
b,out=sys.argv[1],sys.argv[2];ids=sys.argv[3:]
fs=sorted(glob.glob(f'incoming/{b}/*-[a-d].jpg'),key=lambda f:(int(re.match(r'(\d+)',os.path.basename(f))[1]),f))
if ids: fs=[f for f in fs if re.match(r'(\d+)',os.path.basename(f))[1] in ids]
W,H,C=640,478,4;R=(len(fs)+C-1)//C
s=Image.new('RGB',(W*C,H*R),'#333');d=ImageDraw.Draw(s);fnt=ImageFont.truetype('arial.ttf',26)
for n,f in enumerate(fs):
    i=Image.open(f).convert('RGB');i.thumbnail((W-6,H-6));x,y=n%C*W+3,n//C*H+3;s.paste(i,(x,y))
    d.rectangle((x,y,x+96,y+34),fill='#000');d.text((x+6,y+3),os.path.basename(f)[:-4],fill='#ff0',font=fnt)
s.save(out,quality=85);print(len(fs),s.size)
