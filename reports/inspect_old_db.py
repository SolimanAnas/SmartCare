import sqlite3
import os
import subprocess

# Extract old DB from git
old_db_path = os.path.join(os.environ['TEMP'], 'old_users.db')
subprocess.run(['git', 'show', '292c5bc:instance/users.db'], stdout=open(old_db_path, 'wb'), check=True)

print(f"File size: {os.path.getsize(old_db_path)} bytes")

conn = sqlite3.connect(old_db_path)
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()
print(f"Tables: {tables}")

for table in tables:
    table_name = table[0]
    cursor.execute(f"SELECT COUNT(*) FROM [{table_name}]")
    count = cursor.fetchone()[0]
    print(f"\nTable '{table_name}': {count} rows")
    
    if count > 0:
        cursor.execute(f"PRAGMA table_info([{table_name}])")
        columns = [col[1] for col in cursor.fetchall()]
        print(f"Columns: {columns}")
        
        cursor.execute(f"SELECT * FROM [{table_name}] LIMIT 5")
        rows = cursor.fetchall()
        for row in rows:
            row_dict = dict(zip(columns, row))
            # Mask password field
            if 'password' in row_dict:
                row_dict['password'] = '***MASKED***'
            print(f"  {row_dict}")

conn.close()
os.remove(old_db_path)
