from shared import app, auth, api
from flask_restful import Resource
import json
from uploadxml import TitleList
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import abort
from models import Objects, db

from pprint import pprint

fname = 'odh20200928'

if __name__ == '__main__':
    f = open(fname, encoding='utf-8')

    columns = [ v.name for v in Objects.__table__.columns][1:]
    del columns[columns.index('declare_length')]
    del columns[columns.index('passport_draft_org')]
    del columns[columns.index('passport_date')]
    del columns[columns.index('geometry')]
    for line in f:
        d = json.loads(line)
        ins = { k : json.dumps(d[k]) for k in columns }
        ins['name'] = d['name']
        if 'geometry' in d.keys():
            ins['geometry'] = d['geometry']
        else:
            ins['geometry'] = '{}'
        if 'passport_date' in d.keys():
            ins['passport_date'] = d['passport_date']
        else:
            ins['passport_date'] = ''
        if 'passport_draft_org' in d.keys():
            ins['passport_draft_org'] = d['passport_draft_org']
        else:
            ins['passport_draft_org'] = ''
        if 'declare_length' in d.keys():
            ins['declare_length'] = d['declare_length']
        elif 'layout_length' in d.keys():
            ins['declare_length'] = d['layout_length']
        new_obj = Objects(**ins)
        db.session.add(new_obj)
        db.session.commit()



'''
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(512), index = True)
    geometry = db.Column(db.String(1800))
    tree = db.Column(db.String(1800))
    calc_attribute = db.Column(db.String(1800))
    clean_category_id = db.Column(db.String(64))
    declare_length = db.Column(db.Float)
    passport_date = db.Column(db.String(64))
    passport_draft_org = db.Column(db.String(64))
'''