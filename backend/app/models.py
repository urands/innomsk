from shared import db
from flask_jwt_extended import get_jwt_identity
import datetime
from sqlalchemy import ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from dataclasses import dataclass
import json



@dataclass
class User(db.Model):
    INSPECTOR = 'inspector'
    MANAGER = 'manager'
    ADMIN = 'admin'

    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(32), index = True)
    password = db.Column(db.String(128))
    role = db.Column(db.String(32), default= INSPECTOR)
    car = db.Column(db.String(32), default=None)
    fio = db.Column(db.String(32), default=None)

    def to_dict(self):
        return {
            'username': self.username,
            'role': self.role,
            'fio': self.fio,
            'car': self.car,
        }


    def verify_password(self, password):
        # TODO: Hash password in future
        return password == self.password

    @classmethod
    def current(cls):
        username = get_jwt_identity()
        return User.query.filter_by(username=username).first()

@dataclass
class TitleLists(db.Model):
    id: int
    name: str
    filename: str
    created_date: datetime

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    filename = db.Column(db.String(256))
    created_date = db.Column(db.DateTime(timezone=True), server_default=func.now())
    def as_dict(self):
        d = {}
        for c in self.__table__.columns:
            d[c.name] = getattr(self, c.name)
            if c.name == 'created_date':
                d[c.name] = d[c.name].isoformat()
        return d

class TitleObjects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title_id = db.Column(db.Integer, ForeignKey('title_lists.id'))
    object_id = db.Column(db.Integer, default=None)
    title = relationship("TitleLists", back_populates="titles")
    name = db.Column(db.String(256), index = True)
    start = db.Column(db.String(256))
    end = db.Column(db.String(256))
    area = db.Column(db.String(256))
    basis = db.Column(db.String(256))
    program = db.Column(db.String(256))
    category = db.Column(db.String(256))
    sq_road = db.Column(db.Float)
    sq_sidewalk = db.Column(db.Float)
    sq_roadside = db.Column(db.Float)
    sq_total = db.Column(db.Float)
    created_date = db.Column(db.DateTime(timezone=True), server_default=func.now())

    def as_dict(self):
        d = {}
        for c in self.__table__.columns:
            d[c.name] = getattr(self, c.name)
            if c.name == 'created_date':
                d[c.name] = d[c.name].isoformat()
        return d

TitleLists.titles = relationship("TitleObjects", order_by=TitleObjects.id, back_populates="title")


class Objects(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(512), index = True)
    geometry = db.Column(db.JSON)
    tree = db.Column(db.String(512))
    calc_attribute = db.Column(db.String(512))
    clean_category_id = db.Column(db.String(64))
    declare_length = db.Column(db.Float)
    passport_date = db.Column(db.String(64))
    passport_draft_org = db.Column(db.String(64))


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'geometry': self.geometry
        }


@dataclass
class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, index=True)
    inspector_id = db.Column(db.Integer, index=True)
    inspect = db.Column(db.JSON)
    progress = db.Column(db.Integer)
    inspection_date = db.Column(db.DateTime(timezone=True), server_default=func.now())
    modify_date = db.Column(db.DateTime(timezone=True), onupdate=func.now())


    def to_dict(self):
        return {
            "id" : self.task_id,
            "inspect" : self.inspect,
            "inspection_date": self.inspection_date.isoformat()
        }


class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, index=True)
    inspector_id = db.Column(db.Integer, index=True)
    message = db.Column(db.String(512))
    date = db.Column(db.DateTime(timezone=True), server_default=func.now())

    def __str__(self):
        return self.message
    def __repr__(self):
        return self.message

db.create_all()
db.session.commit()
