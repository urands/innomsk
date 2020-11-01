from flask_restful import Resource, reqparse
from flask_jwt_extended import jwt_required
from models import User, TitleLists, TitleObjects, Objects, Tasks, Comments, db
from flask import abort, request
from datetime import datetime
import werkzeug
import pandas as pd
import json

class TaskController(Resource):
    @jwt_required
    def get(self):
        user = User.current()
        if user is None:  # or user.role != 'admin':
            return {'message': 'Bad user, you must be admin'}, 401

        objs = Tasks.query.filter_by(inspector_id = user.id).all()
        if objs is None:
            return None, 300
        res = []
        for obj in objs:
            r = obj.to_dict()
            if obj.task_id is not None:
                tsk = TitleObjects.query.get(obj.task_id)
                r['name'] = tsk.name
                r['program'] = tsk.program
                if tsk.object_id:
                    geo = Objects.query.get(tsk.object_id)
                    r['geometry'] = geo.geometry
            inspect = json.loads(obj.inspect) if obj.inspect else {}
            r['rating'] = inspect['rating'] if 'rating' in inspect else 0
            r['progress'] = inspect['progress'] if 'progress' in inspect else 0
            r['status'] = inspect['status'] if 'status' in inspect else 'инспекция'
            r['comments'] = [ str(c) for c in  Comments.query.filter_by(task_id = obj.task_id).all()]
            res.append(r)
        return res


    @jwt_required
    def post(self, task_id):
        if task_id is None:
            return {'message': 'Bad task id, you must be admin'}, 401
        user = User.current()
        if user is None:  # or user.role != 'admin':
            return {'message': 'Bad user, you must be admin'}, 401

        data = request.get_json()
        if data is not None:
            if 'message' in data:
                c = Comments( task_id = task_id, inspector_id= user.id, message= data['message'] )
                db.session.add(c)
            else:
                tsk = Tasks.query.filter_by(task_id=task_id).first()

                if tsk is None:
                    return {'message': 'Bad task, you must be admin'}, 401
                inspect = json.loads(tsk.inspect) if tsk.inspect else {}
                if 'rating' in data:
                    inspect['rating'] = data['rating']
                if 'progress' in data:
                    inspect['progress'] = data['progress']
                if 'status' in data:
                    inspect['status'] = data['status']

                tsk.inspect = json.dumps(inspect)
                db.session.add(tsk)
        db.session.commit()
        return {'message': 'Task was updated successful'}

