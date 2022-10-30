# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Tecs

- [Angular Material](https://material.angular.io)
- [Docker](https://www.docker.com)

## Executando

### sem docker

**clone o projeto antes** e acesse a pasta `frontend`

```sh
npm i
ng serve
```

A aplicação `frontend` rodará na porta 4200 ([acesse aqui](http://localhost:4200)).

### com docker

**clone o projeto antes** na raiz do projeto:

```sh
docker-compose up && docker-compose rm -fvs
```

A aplicação `frontend` rodará na porta 80 por causa do nginx ([acesse aqui](http://localhost)).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
