from typing import List

from fastapi import FastAPI, Depends
from database import SessionLocal, engine
import service

from sqlalchemy.orm import Session

import schemas
import models

models.Base.metadata.create_all(bind=engine)  # retirar quando usar migrations

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/products", response_model=List[schemas.Product])
def read_root(db: Session = Depends(get_db)):
    products = service.get_products(db)
    return products
