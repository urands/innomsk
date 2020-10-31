# apps.shared.models
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_login import LoginManager
from flask_httpauth import HTTPBasicAuth
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, get_jwt_identity

dburl = 'mysql+mysqldb://root@localhost:3306/innohack'

app = Flask(__name__)

app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = dburl
db = SQLAlchemy(app)
auth = HTTPBasicAuth(app)
api = Api(app)
app.config['JWT_SECRET_KEY'] = 'innohack2020'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
jwt = JWTManager(app)

