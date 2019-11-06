import os


def backup_db():
    for var in ['DB_BACKUP_PATH', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_HOST', 'MYSQL_DATABASE']:
        if not os.environ.get(var):
            print(f'{var} environment variable must be set')

    os.system('mysqldump --user=$MYSQL_USER --password=$MYSQL_PASSWORD --host=$MYSQL_HOST $MYSQL_DATABASE > /tmp/dump.sql')
    os.system('echo \'create database `$MYSQL_DATABASE`_tmp\' | mysql --user=$MYSQL_USER --password=$MYSQL_PASSWORD --host=$MYSQL_HOST')
    os.system('cp /tmp/dump.sql $DB_BACKUP_PATH')

if __name__ == '__main__':
    backup_db()
