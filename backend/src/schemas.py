from __future__ import annotations
from typing import List, Optional

from pydantic import BaseModel, condecimal, constr, PositiveInt


class ProductBase(BaseModel):
    name: constr(max_length=60)
    price: condecimal(ge=0)
    serie: PositiveInt
    category_id: int


class ProductCreate(ProductBase):
    pass


class CategoryBase(BaseModel):
    name: constr(max_length=128)


class ProductOut(ProductBase):
    id: int
    category: CategoryName

    class Config:
        orm_mode = True


class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True


class Category(CategoryBase):
    id: int
    # products: List[Product]

    class Config:
        orm_mode = True


class ProductUpdate(ProductBase):
    name: Optional[constr(max_length=60)]
    price: Optional[condecimal(gt=0)]
    serie: Optional[PositiveInt]
    category_id: Optional[int]


class CategoryCreate(CategoryBase):
    pass


class CategoryName(CategoryBase):
    class Config:
        orm_mode = True


ProductOut.update_forward_refs()
