<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

¡Por supuesto! Aquí tienes la documentación en formato Markdown (`.md`) que puedes copiar y pegar directamente en tu README de Git:

```markdown
## Autenticación

### Inicio de Sesión (Login)

- **URL:** POST /api/v1/auth/sign-in
- **Descripción:** Inicia sesión en la aplicación.
- **Cuerpo requerido:**
  ```json
  {
    "email": "String",
    "password": "String"
  }
  ```

### Registro de Usuario

- **URL:** POST /api/v1/auth/sign-up
- **Descripción:** Registra un nuevo usuario en la aplicación.
- **Cuerpo requerido:**
  ```json
  {
    "email": "String",
    "password": "String",
    "firstName": "String",
    "lastName": "String"
  }
  ```
- **Requiere Sesión y Cookie**

## Tareas

### Registro de Tarea

- **URL:** POST /api/v1/tasks
- **Descripción:** Registra una nueva tarea.
- **Cuerpo requerido:**
  ```json
  {
    "name": "String",
    "description": "String",
    "dueDate": "Date"
  }
  ```

### Obtener una Tarea

- **URL:** GET /api/v1/tasks/{id}
- **Descripción:** Obtiene una tarea específica por su ID.

### Obtener Todas las Tareas

- **URL:** GET /api/v1/tasks
- **Descripción:** Obtiene todas las tareas disponibles.

### Eliminar una Tarea

- **URL:** DELETE /api/v1/tasks/{ID}
- **Descripción:** Elimina una tarea específica por su ID.

### Actualizar Tarea

- **URL:** PATCH /api/v1/tasks/{ID}
- **Descripción:** Actualiza una tarea específica por su ID.
- **Cuerpo requerido:**
  ```json
  {
    "name": "String",
    "description": "String",
    "dueDate": "Date"
  }
  ```
- **Requiere Sesión y Cookie**

## Usuario

### Eliminar Mi Cuenta

- **URL:** DELETE /api/v1/users/
- **Descripción:** Elimina la cuenta del usuario actual.

### Actualizar Mi Cuenta

- **URL:** PATCH /api/v1/users/
- **Descripción:** Actualiza la cuenta del usuario actual.
- **Cuerpo requerido:**
  ```json
  {
    "firstName": "String",
    "lastName": "String"
  }
  ```

### Obtener Datos de Mi Cuenta

- **URL:** GET /api/v1/users/
- **Descripción:** Obtiene los datos de la cuenta del usuario actual.
```


