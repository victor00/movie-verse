# MovieVerse: Controle de Filmes 🎬

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)

## Sobre

MovieVerse é uma aplicação web projetada para controlar e organizar sua coleção de filmes. Este projeto foi desenvolvido como parte da disciplina de Frameworks Web (Angular).

## Funcionalidades

- CRUD de filmes 🎥
- Marcar filmes como favoritos ⭐
- Registrar filmes assistidos 👀
- Listar filmes por escopos 📑

## Checklist do Projeto

- [X] Repositório no GitHub com Gitflow (Branches `master` e `develop`)
- [X] Uso de framework CSS (Bootstrap, Materialize, etc.)
- [X] Layout responsivo usando ou não algum framework CSS.
- [X] Conceito de componentes
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Data-binding (Interpolation, Property Binding, Event Binding, Two-Way Data Binding)
- [X] Passagem de dados via @Input ou @Output
- [X] Rotas - Mapear componentes à rotas no módulo de rotas.
- [X] Navegação entre páginas por meio de rotas
- [ ] Passagem de dados entre componentes via parâmetros de rotas
- [X] Validação de campos de formulário com REGEX e apresentar os erros.
- [X] Desabilitar o botão de submit enquanto o formulário está inválido.
- [ ] Tratamento de requisições a API com Promises ou Observables
- [ ] Cadastro de entidade no JSON Server
- [X] Uso de ngFor - Apresentar uma lista de dados com a diretiva estrutural ngFor
- [X] Usar a diretiva ngIf
- [ ] Formatação de dados com Pipes
- [ ] Build e Deploy

## Tecnologias

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)

## Instalação

```bash
# Clone este repositório
git clone git@github.com:victor00/movie-verse.git

# Entre no diretório
cd movie-verse

# Instale as dependências
npm install

# Execute a aplicação
ng serve
```

## Uso
-  (Porta sujeita ao seu critério de qual utilizar -> lembre-se de verificar nas configurações)
Abra seu navegador e visite http://localhost:4200/

# MovieVerse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.
- O Projeto tem dependência com API do TMDB, para sua utilização é necessário uma API_KEY
https://www.themoviedb.org/

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
