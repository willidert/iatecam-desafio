from typing import List, Optional

from fastapi import FastAPI, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from src.db.session import SessionLocal

from sqlalchemy.orm import Session

from . import schemas, service

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/categories", response_model=List[schemas.Category])
def list_categories(db: Session = Depends(get_db)):
    categories = service.get_categories(db)
    return categories


@app.post("/categories", response_model=schemas.Category)
def create_category(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return service.create_category(db, category)


@app.get("/products", response_model=List[schemas.ProductOut])
def list_products(db: Session = Depends(get_db)):
    products = service.get_products(db)
    return products


@app.post("/products", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return service.create_product(db, product)


@app.get("/products/{product_id}", response_model=Optional[schemas.Product])
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    return service.get_product_by_id(db, product_id)


@app.patch("/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def update_product(product_id: int, product: schemas.ProductUpdate, db: Session = Depends(get_db)):
    return service.update_product(db, product, product_id)


@app.delete("/products/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(product_id: int, db: Session = Depends(get_db)):
    return service.delete_product(db, product_id)
