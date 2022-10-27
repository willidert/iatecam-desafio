from fastapi import HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from . import models, schemas


def create_category(db: Session, category: schemas.CategoryCreate) -> schemas.Category:
    db_category = models.Category(**category.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category


def get_categories(db: Session, skip: int = 0, limit: int = 100) -> List[schemas.Category]:
    return db.query(models.Category).offset(skip).limit(limit).all()


def get_products(db: Session, skip: int = 0, limit: int = 100) -> List[schemas.Product]:
    return db.query(models.Product).offset(skip).limit(limit).all()


def create_product(db: Session, product: schemas.ProductCreate) -> schemas.Product:
    db_product = models.Product(
        **product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


def get_product_by_id(db: Session, product_id: int) -> schemas.Product or None:
    product = db.query(models.Product).filter(
        models.Product.id == product_id).first()
    if product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    return product


def update_product(db: Session, product: schemas.ProductUpdate, product_id: int) -> None:
    db.query(models.Product).filter(models.Product.id ==
                                    product_id).update(product.dict(exclude_unset=True))
    db.commit()
    return


def delete_product(db: Session, product_id: int) -> None:
    db.query(models.Product).filter(models.Product.id ==
                                    product_id).delete()
    db.commit()
    return
