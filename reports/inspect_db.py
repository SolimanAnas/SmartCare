import os
import sqlite3

db_path = 'instance/users.db'
print(f'DB size: {os.path.getsize(db_path)} bytes')

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()
print(f'Tables: {tables}')

for table in tables:
    table_name = table[0]
    cursor.execute(f"SELECT * FROM [{table_name}]")
    rows = cursor.fetchall()
    print(f'\nTable "{table_name}": {len(rows)} rows')
    cursor.execute(f"PRAGMA table_info([{table_name}])")
    columns = [col[1] for col in cursor.fetchall()]
    print(f'Columns: {columns}')
    for row in rows[:10]:
        print(f'  {dict(zip(columns, row))}')
    if len(rows) > 10:
        print(f'  ... and {len(rows) - 10} more rows')

conn.close()
