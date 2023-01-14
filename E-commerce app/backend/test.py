from user import User 
from account import get_user_by_email
from repo import CONNECTION_STRING


if __name__ == '__main__':
    get_user_by_email(User, CONNECTION_STRING)