import sqlite3
import json
import re

class User:
    
    def __init__(self, id=None, firstName=None, lastName=None, email=None,
                 password=None, secondPassword=None):
        self.id = id
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password
        self.secondPassword = secondPassword




    def validate_email(self):
        regex = r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+'
        email = self.email.lower()
        email = email.replace(" ", "")
        if re.fullmatch(regex, email):
            return email
        else:
            print('Email is not valid')


    def validate_password(self):
        spaces = self.password.find(" ")
        if spaces > -1:
            raise ValueError("Password can't contain spaces, try again!")

        if len(self.password) < 8:
            raise ValueError("Password too short, minimum 8 characters required.")

        upper = 0
        for char in self.password:
            if char.isupper():
                upper += 1

        if upper == 0:
            raise ValueError("Password must contain one upper case letter.")

        return self.password

    @classmethod
    def from_dict(cls, user_dict):
        id = user_dict.get("id")
        firstName = user_dict.get("firstName")
        lastName = user_dict.get("lastName")
        email = user_dict.get("email")
        password = user_dict.get("password")
        secondPassword = user_dict.get("secondPassword")
        user = cls(id=id, firstName=firstName, lastName=lastName, email=email,
                    password=password, secondPassword=secondPassword)
        return user


    @classmethod
    def from_list(cls, user_list):
        id = user_list[0]
        firstName = user_list[1]
        lastName = user_list[2]
        email = user_list[3]
        password = user_list[4]
        secondPassword = user_list[5]
        user = cls(id=id, firstName=firstName, lastName=lastName, email=email,
                   password=password, secondPassword=secondPassword)
        return user

    def to_dict(self):
        user_dict = {
            "id":self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "password": self.password,
            "secondPassword": self.secondPassword
        }
        return user_dict

    def to_json(self):
        user_dict = self.to_dict()
        user_json = json.dumps(user_dict)
        return user_json
