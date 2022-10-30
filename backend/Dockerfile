FROM python:3.9

WORKDIR /app/

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src /app/src

# ENV PYTHONPATH src/

EXPOSE 8000

# RUN alembic upgrade head

# mover isso para o docker-compose.yml
# CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
