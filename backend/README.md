# API

Projeto para o desafio fullstack junior - iadecam

## Tecs

- Docker
- Fastapi
- Postgres

## Executando

Não esqueça de clonar as variaveis de ambiente do arquivo `.env.example`.

```sh
cat .env.example > .env
```

### sem docker

Você precisa de um banco Postgres rodando ou você pode modificar a url do banco para usar o sqlite3. **Após clonar o projeto** acesse a pasta `backend` e crie um ambiente virtual para instalar as dependências.

```sh
cd backend/

python -m venv env

source env/bin/activate

pip install -r requirements.txt

uvicorn src.main:app --reload
```

A api pode ser acessada na porta 8000 ([acesse aqui](localhost:8000/products)).

### com docker

Na raiz do projeto:

```sh
docker-compose up && docker-compose rm -fvs
```

## Testes

Implementei alguns testes na api que podem ser executados com:

```sh
pytest
```
