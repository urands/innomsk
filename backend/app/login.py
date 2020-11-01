from shared import app, auth, db
from models import User
from flask import request, g, abort, jsonify
from flask_restful import reqparse
from flask_jwt_extended import (create_access_token,
                                create_refresh_token, jwt_required,
                                jwt_refresh_token_required,
                                get_jwt_identity,
                                get_raw_jwt)

@auth.verify_password
def verify_password(username, password):
    """Validate user passwords and store user in the 'g' object"""
    # try to authenticate with login/password
    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return False
    g.user = user
    return True

@auth.get_user_roles
def get_user_roles(user):
    return user.get_roles()


parser = reqparse.RequestParser()
parser.add_argument('username', help = 'This field cannot be blank', required = True)
parser.add_argument('password', help = 'This field cannot be blank', required = True)


@app.route('/api/login', methods = ['POST'])
def login():
    data = parser.parse_args()
    username = data.get('username')
    password = data.get('password')
    if username is None or password is None:
        abort(400)  # missing arguments
    user = User.query.filter_by(username=username).first()
    if user is None:
        return jsonify({'message': 'User not found'}), 400
    if not user.verify_password(password):
        return jsonify({'message': 'Password wrong'}), 400

    access_token = create_access_token(identity=data['username'])
    refresh_token = create_refresh_token(identity=data['username'])

    db.session.add(user)
    db.session.commit()
    return jsonify({'username': user.username, 'role': user.role, 'fio' : user.fio,
                    'access_token': access_token, 'refresh_token': refresh_token  }), 200