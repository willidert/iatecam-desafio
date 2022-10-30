BEGIN;

CREATE TABLE alembic_version (
    version_num VARCHAR(32) NOT NULL, 
    CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num)
);

-- Running upgrade  -> 0871b66f06be

CREATE TABLE categories (
    id SERIAL NOT NULL, 
    name VARCHAR(128) NOT NULL, 
    PRIMARY KEY (id)
);

CREATE INDEX ix_categories_id ON categories (id);

INSERT INTO alembic_version (version_num) VALUES ('0871b66f06be') RETURNING alembic_version.version_num;

-- Running upgrade 0871b66f06be -> 8d907b43a43b

CREATE TABLE products (
    id SERIAL NOT NULL, 
    name VARCHAR(60) NOT NULL, 
    price FLOAT(2) NOT NULL, 
    serie INTEGER NOT NULL, 
    category_id INTEGER, 
    PRIMARY KEY (id), 
    FOREIGN KEY(category_id) REFERENCES categories (id)
);

CREATE INDEX ix_products_id ON products (id);

UPDATE alembic_version SET version_num='8d907b43a43b' WHERE alembic_version.version_num = '0871b66f06be';

COMMIT;

