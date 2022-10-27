import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

# MYSQL_DATABASE_URL = "mysql+pymsql://iatecam:password@127.0.0.1/iatecam"

# MARIADB_DATABASE_URL = "mysql://will:password@localhost/test"

load_dotenv()

PYTHON_MODE = os.getenv('PYTHON_MODE')

if PYTHON_MODE == "dev":  # flag para o ci
    SQLALCHEMY_DATABASE_URL = os.getenv('SQLALCHEMY_DATABASE_URL')
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL
    )
else:
    SQLALCHEMY_DATABASE_URL = os.getenv('SQLALCHEMY_DATABASE_URL_CI')
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
