from shared import app, auth, api
from flask_restful import Resource
import login
from uploadxml import TitleList
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import abort
from objects import ObjectController
from tasks import TaskController

from models import User

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


class Test(Resource):
    @jwt_required
    def get(self):
        current_user = User.current()
        if current_user is None:
            abort('Bad user', 400)
        return {'test': 'test', 'user': current_user.username, 'role': current_user.role}





api.add_resource(Test, '/test')
api.add_resource(TitleList, '/titlelist')
api.add_resource(TitleList, '/titlelist/<int:id>', endpoint='get_objects')
api.add_resource(ObjectController, '/object/<int:id>')
api.add_resource(TaskController, '/tasks')
api.add_resource(TaskController, '/tasks/<int:task_id>', endpoint='post')


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
