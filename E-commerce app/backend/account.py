import re
from user import User
from repo import insert_user, get_user_by_email, getUserByEmail

def signup(body, connection_string):
    user = User.from_dict(body)

    user.email = user.validate_email()
    user.password = user.validate_password()
    if user.password != user.secondPassword:
        raise ValueError("Password missmatch")

    insert_user(user, connection_string)



def user_obj(body, connection_string):
    firstName = body.get("firstName")
    lastName = body.get("lastName")
    email = body.get("email")
    
    user = User(firstName=firstName, lastName=lastName, email=email)
    existing_user = get_user_by_email(user, connection_string)
    return existing_user




def signin(body, connection_string):
    
    email = body.get("email")
    password = body.get("password")

    user = User(email=email, password=password)
    userObj = User

    user.email = user.validate_email()
    user.password = user.validate_password()

    existing_user = get_user_by_email(user, connection_string)

    if user.password != existing_user.password:
        raise ValueError('Password missmatch')

    return existing_user


def getUserDetails(userEmail, connection_string):
    user = getUserByEmail(userEmail, connection_string)
    return user

