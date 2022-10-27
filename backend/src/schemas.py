from typing import Optional

from pydantic import BaseModel, condecimal, constr, PositiveInt


class CategoryBase(BaseModel):
    name: constr(max_length=128)


class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int

    class Config:
        orm_mode = True


class ProductBase(BaseModel):
    name: constr(max_length=60)
    price: condecimal(ge=0)
    serie: PositiveInt
    category_id: int

class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True


class ProductUpdate(ProductBase):
    name: Optional[constr(max_length=60)]
    price: Optional[condecimal(gt=0)]
    serie: Optional[PositiveInt]
    category_id: Optional[int]
