import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

# MYSQL_DATABASE_URL = "mysql+pymsql://iatecam:password@127.0.0.1/iatecam"

# MARIADB_DATABASE_URL = "mysql://will:password@localhost/test"

load_dotenv()

SQLALCHEMY_DATABASE_URL = os.getenv('SQLALCHEMY_DATABASE_URL')
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
