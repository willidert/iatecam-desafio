from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..main import app, get_db

from ..database import Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
TestingSessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine)


Base.metadata.create_all(bind=engine)


def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)


def test_get_products():
    response = client.get('/products')

    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) == 0


def test_get_categories():
    response = client.get('/categories')

    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) == 0


def test_create_category():
    CATEGORY = {
        "name": "A"
    }

    response = client.post("/categories", json=CATEGORY)

    assert response.status_code == 200

    data = response.json()
    assert "name" in data
    assert CATEGORY["name"] == data["name"]

# add testes para os limites das entradas


def test_create_product():
    PRODUCT = {
        "name": "produto de teste",
        "price": 1500.10,
        "serie": 3,
        "category_id": 1
    }

    response = client.post("/products", json=PRODUCT)

    assert response.status_code == 200, response.text

    data = response.json()

    assert "name" in data
    assert data["name"] == PRODUCT["name"]
    assert data["price"] == PRODUCT["price"]
    assert data["serie"] == PRODUCT["serie"]


def test_create_product_without_serie():
    PRODUCT = {
        "name": "produto de teste 1",
        "price": 1500.10,
        "category_id": 1
    }

    response = client.post("/products", json=PRODUCT)

    assert response.status_code == 422, response.text

    data = response.json()

    assert "detail" in data
    assert data["detail"][0]["msg"] == "field required"
    assert data["detail"][0]["loc"] == ["body", "serie"]
    assert data["detail"][0]["type"] == "value_error.missing"
