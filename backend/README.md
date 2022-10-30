# API

Projeto para a vaga de Fullstack jr

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

A api pode ser acessada na porta 8000 ([acesse aqui](http://localhost:8000/products)).

### com docker

Seguir as instruções no [README.md](https://github.com/willidert/iatecam-desafio#docker) da raiz.

## Testes

Implementei alguns testes na api que podem ser executados com:

```sh
pytest
```

## Demonstração

Se não conseguir ou não desejar subir os serviços, eles estão disponíveis:

| service | Tecnology |                          URL                           |
| ------- | :-------: | :----------------------------------------------------: |
| web     |  Angular  |    [clique aqui](https://iatecam-frontend.web.app/)    |
| api     |  Fastapi  | [clique aqui](https://crud-iatecam.herokuapp.com/docs) |
