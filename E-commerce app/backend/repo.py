import sqlite3
from user import User

CONNECTION_STRING= f"D:\mainCodeFolder\FULL_STACK_WEB_APP\E-commerce app\datastore\data.db"


def insert_user(user, connection_string):
    conn = sqlite3.connect(connection_string)
    c = conn.cursor()

    query = f"""INSERT INTO users(
        firstName,
        lastName,
        email,
        password,
        secondPassword
       ) 
        VALUES(
       '{user.firstName}' ,
       '{user.lastName}',
       '{user.email}',
       '{user.password}',
       '{user.secondPassword}'
    );"""

    try:
        c.execute(query)
        conn.commit()
        c.close()
        conn.close()
    except Exception as e:
        c.close()
        conn.close()
        raise e


def get_user_by_email(user, connection_string):
    query = f"SELECT * FROM users WHERE email='{user.email}'"

    conn = sqlite3.connect(connection_string)
    cursor = conn.cursor()
    try:
        entries = cursor.execute(query)
        user = entries.fetchone()
        cursor.close()
        conn.close()
    except Exception as e:
        cursor.close()
        conn.close()
        raise e

    existing_user = User.from_list(user)
    
    return existing_user


def getUserByEmail(userEmail, connection_string):
    query = f"SELECT * FROM users WHERE email={userEmail}"
    conn = sqlite3.connect(connection_string)
    cursor = conn.cursor()
    try:
        data = cursor.execute(query).fetchone()
        cursor.close()
        conn.close()
    except Exception as e:
        cursor.close()
        conn.close()
        raise e
    
    user = User.from_list(data)   
    return user 