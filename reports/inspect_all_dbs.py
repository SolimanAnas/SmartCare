import sqlite3
import os
import subprocess

commits = ['292c5bc', '99cd25c']

for commit in commits:
    print(f"\n{'='*60}")
    print(f"Commit: {commit}")
    print('='*60)
    
    try:
        # Extract DB from git
        db_path = os.path.join(os.environ['TEMP'], f'users_{commit}.db')
        result = subprocess.run(
            ['git', 'show', f'{commit}:instance/users.db'],
            stdout=open(db_path, 'wb'),
            stderr=subprocess.PIPE,
            check=True
        )
        
        print(f"File size: {os.path.getsize(db_path)} bytes")
        
        conn = sqlite3.connect(db_path)
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
        os.remove(db_path)
        
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Error: {e}")
