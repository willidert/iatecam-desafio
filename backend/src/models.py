from sqlalchemy import Column, Boolean, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from database import Base


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(length=128))

    products = relationship("Product")


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(length=60))
    price = Column(Float(precision=2, asdecimal=True))
    serie = Column(Integer)

    category_id = Column(Integer, ForeignKey("categories.id"))
