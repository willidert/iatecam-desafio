from typing import List

from fastapi import FastAPI, Depends
from .database import SessionLocal, engine

from sqlalchemy.orm import Session

from . import schemas, models, service

models.Base.metadata.create_all(bind=engine)  # retirar quando usar migrations

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/products", response_model=List[schemas.Product])
def list_products(db: Session = Depends(get_db)):
    products = service.get_products(db)
    return products


@app.get("/categories", response_model=List[schemas.Category])
def list_categories(db: Session = Depends(get_db)):
    categories = service.get_categories(db)
    return categories


@app.post("/categories", response_model=schemas.Category)
def create_product(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return service.create_category(db, category)


@app.post("/products", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return service.create_product(db, product)
