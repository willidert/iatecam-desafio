# Desafio iatecam

Projeto para a vaga de Fullstack jr

## Diferencias

- [x] Deploy
- [x] CI
- [x] Docker
- [x] Testes para a api

## Executando

### Docker

Primeiro precisamos setar nossas variaveis de ambiente

```sh
cat .env.example > .env
```

Alguns passos importantes para execução das migrations no container.

```sh
docker-compose up web db && docker-compose rm -fvs
```

Isso vai levantar o serviço da api e do banco, ainda não podemos subir todos os serviços pois precisamos executar as migrations. Com o container api de pé:

```sh
# execute em outro terminal

docker exec api alembic upgrade head

# output
INFO  [alembic.runtime.migration] Context impl PostgresqlImpl.
INFO  [alembic.runtime.migration] Will assume transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> 0871b66f06be, create categories table
INFO  [alembic.runtime.migration] Running upgrade 0871b66f06be -> 8d907b43a43b, create products table
```

Após, derrube o serviço da api:

```sh
docker stop api
```

Agora precisamos modificar o docker-compose.yml e modificar o seguinte trecho que está comentado:

```yml
api:
    ...
    command: "uvicorn src.main:app --host: 0.0.0.0 --reload"
```

isso irá atualizar o comando que será executado quando o container for executado.

Feito isso podemos subir o frontend e a api novamente:

```sh
docker-compose up web api && docker-compose rm -fvs
```

| service |    Tecnology    |                    URL                    |
| ------- | :-------------: | :---------------------------------------: |
| web     | Angular e Nginx |      [clique aqui](http://localhost)      |
| api     |     Fastapi     | [clique aqui](http://localhost:8000/docs) |
| db      |    Postgres     |         executando na porta 5432          |

### Sem docker

Usando essa abordagem é preciso de um banco de dados configurado, a api está esperando um banco de dados Postgres mas pode ser usado qqr um com alguns ajustes.

**Vamos começar subindo a api.**

```sh
cd backend/

python -m venv .env/ # ou qqr outro comando para criar um ambiente virtual, não é obrigatório

source env/bin/activate # ativando o ambiente, só execute se fzr o passo anterior
```

Agora vamos instalar as dependencias:

```sh
pip install -r requirements.txt
```

feito isso precisamos executar as migrations no banco, não esqueça de copiar o `.env` com as variaveis de ambiente para `backend/`, isso é importante para a ORM conseguir encontrar o banco de dados.

```sh
alembic upgrade head
```

```sh
uvicorn src.main:app --reload
```

**Subindo o frontend.**

Acesse a pasta `frontend`

```sh
cd frontend

npm install
```

E o comando para executar é:

```sh
npm run start
```

| service | Tecnology |                    URL                    |
| ------- | :-------: | :---------------------------------------: |
| web     |  Angular  |      [clique aqui](http://localhost)      |
| api     |  Fastapi  | [clique aqui](http://localhost:8000/docs) |

## Demonstração

Se não conseguir ou não desejar subir os serviços, eles estão disponíveis:

| service | Tecnology |                          URL                           |
| ------- | :-------: | :----------------------------------------------------: |
| web     |  Angular  |    [clique aqui](https://iatecam-frontend.web.app/)    |
| api     |  Fastapi  | [clique aqui](https://crud-iatecam.herokuapp.com/docs) |
