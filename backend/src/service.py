from typing import List
from sqlalchemy.orm import Session
import models
import schemas


def get_products(db: Session, skip: int = 0, limit: int = 100) -> List[schemas.Product]:
    return db.query(models.Product).offset(skip).limit(limit).all()
