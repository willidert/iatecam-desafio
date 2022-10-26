from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

SQLALCHEMY_DATABASE_URL = "postgresql://iatecam:password@localhost/iatecam"

# MYSQL_DATABASE_URL = "mysql+pymsql://iatecam:password@127.0.0.1/iatecam"

# MARIADB_DATABASE_URL = "mysql://will:password@localhost/test"

# retirar esse check same thread
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
