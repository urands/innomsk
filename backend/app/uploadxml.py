from flask_restful import Resource, reqparse
from flask_jwt_extended import jwt_required
from models import User, TitleLists, TitleObjects, Objects, db
from flask import abort
from datetime import datetime
import werkzeug
import pandas as pd


class TitleList(Resource):

    def parse_title_list(self, filename):
        tl = TitleLists(filename=filename)

        df = pd.read_excel(filename, nrows= 4)
        tl.name = f'{df.columns[0]} {df.iloc[0][0]}'
        db.session.add(tl)
        df = pd.read_excel(filename, skiprows=6)
        columns = [ n.name for n in list(TitleObjects.__table__.columns)[3:-1]]
        columns.insert(0,'id')
        df.columns = columns
        db.session.commit()
        df = df.fillna(0)
        for idx, row in df.iterrows():
            d = row.to_dict()
            del d['id']
            d['title_id'] = tl.id
            # TODO: impruve here
            o = Objects.query.filter(Objects.name.like(f"{d['name']}")).first()
            if o is not None:
                d['object_id'] = o.id
            obj = TitleObjects(**d)
            db.session.add(obj)
        db.session.commit()



    @jwt_required
    def post(self):
        user = User.current()
        if user is None:  # or user.role != 'admin':
            return {'message': 'Bad user, you must be admin'}, 401
        parse = reqparse.RequestParser()
        parse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()
        xml_file = args['file']
        if xml_file:
            filename = 'xlsx/title_list_' + datetime.now().strftime('%Y-%m-%d-%H.%M.%S') + '.xlsx'
            xml_file.save(filename)
            self.parse_title_list(filename)

        else:
            return {'message': 'Bad file'}, 400
        return {'message': 'File was uploaded and processed'}, 200

    def get(self, id = None):
        if id is None:
            tls = TitleLists.query.all()
            return list(map(TitleLists.as_dict, tls))
        else:
            objs = TitleObjects.query.filter_by(title_id=id).all()
            return list(map(TitleObjects.as_dict, objs))

