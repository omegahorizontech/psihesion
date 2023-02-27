from api.config.configurations import BCRYPT_LOG_ROUNDS, SECRET_KEY
from app import bcrypt

import jwt
from datetime import datetime, timedelta

# dt_obj = datetime.strptime(str(datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')),
#                            '%Y-%m-%d %H:%M:%S')

# class User(dict):
#     """ Store user details """
#     def to_json(self):
#         """
#         Provides some level of database sanitization
#         :return: dictionary
#         """
#         return {
#             "full_name": str(self['fullName']) if 'fullName' in self else None,
#             "email": str(self['email']),
#             "password": bcrypt.generate_password_hash(
#                 str(self['password']), BCRYPT_LOG_ROUNDS
#             ).decode(),
#             "date": str(int(dt_obj.timestamp() * 1000)), # Milliseconds
#         }

#     def encode_auth_token(self, user_id):
#         """
#         Generates the Auth Token
#         :return: string
#         """
#         try:
#             payload = {
#                 'exp': datetime.utcnow() + timedelta(days=1, seconds=0),
#                 'iat': datetime.utcnow(),
#                 'sub': user_id
#             }
#             return jwt.encode(
#                 payload,
#                 SECRET_KEY,
#                 algorithm='HS256'
#             )
#         except Exception as e:
#             return e

#     @staticmethod
#     def decode_auth_token(auth_token):
#         """
#         Validates the auth token
#         :param auth_token:
#         :return: integer|string
#         """
#         try:
#             payload = jwt.decode(auth_token, SECRET_KEY)
#             is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
#             if is_blacklisted_token:
#                 return ('Error', 'Invalid token. Log in again.')
#             else:
#                 return ('Success', payload['sub'])
#         except jwt.ExpiredSignatureError:
#             return ('Error', 'Token expired. Log in again.')
#         except jwt.InvalidTokenError:
#             return ('Error', 'Invalid token. Log in again.')

# class BlacklistToken(dict):
#     """ Get a blacklisted token """
#     @staticmethod
#     def check_blacklist(auth_token):
#         # IDEA: Not implemented - check if auth token is blacklisted
#         # IDEA: Add a logout endpoint that invalidates tokens, right now, tokens expire after 1 day
#         return False

class Clique(dict):
    """Store clique details"""
    pass 