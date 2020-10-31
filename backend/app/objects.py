from flask_restful import Resource, reqparse
from flask_jwt_extended import jwt_required
from models import User, TitleLists, TitleObjects, Objects, db
from flask import abort
from datetime import datetime
import werkzeug
import pandas as pd


class ObjectController(Resource):
    @jwt_required
    def get(self, id):
        user = User.current()
        if user is None:  # or user.role != 'admin':
            return {'message': 'Bad user, you must be admin'}, 401

        obj = Objects.query.get(id)
        if obj is None:
            return None, 300
        return obj.to_dict()

