from typing import List
from sqlalchemy.orm import Session
from . import models, schemas


def get_products(db: Session, skip: int = 0, limit: int = 100) -> List[schemas.Product]:
    return db.query(models.Product).offset(skip).limit(limit).all()


def get_categories(db: Session, skip: int = 0, limit: int = 100) -> List[schemas.Category]:
    return db.query(models.Category).offset(skip).limit(limit).all()


def create_category(db: Session, category: schemas.CategoryCreate) -> schemas.Category:
    db_category = models.Category(**category.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category
