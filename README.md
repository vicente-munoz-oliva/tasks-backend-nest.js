<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Nest.JS API RestFul

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


## Authentication

### Sign-In (Login)

- **URL:** POST /api/v1/auth/sign-in
- **Description:** Log in to the application.
- **Required Body:**
  ```json
  {
    "email": "String",
    "password": "String"
  }
  ```

### Sign-Up

- **URL:** POST /api/v1/auth/sign-up
- **Description:** Register a new user in the application.
- **Required Body:**
  ```json
  {
    "email": "String",
    "password": "String",
    "firstName": "String",
    "lastName": "String"
  }
  ```
- **Requires Session and Cookie**

## Tasks

### Task Registration

- **URL:** POST /api/v1/tasks
- **Description:** Register a new task.
- **Required Body:**
  ```json
  {
    "name": "String",
    "description": "String",
    "dueDate": "Date"
  }
  ```

### Get a Task

- **URL:** GET /api/v1/tasks/{id}
- **Description:** Get a specific task by its ID.

### Get All Tasks

- **URL:** GET /api/v1/tasks
- **Description:** Get all available tasks.

### Delete a Task

- **URL:** DELETE /api/v1/tasks/{ID}
- **Description:** Delete a specific task by its ID.

### Update Task

- **URL:** PATCH /api/v1/tasks/{ID}
- **Description:** Update a specific task by its ID.
- **Required Body:**
  ```json
  {
    "name": "String",
    "description": "String",
    "dueDate": "Date"
  }
  ```
- **Requires Session and Cookie**

## User

### Delete My Account

- **URL:** DELETE /api/v1/users/
- **Description:** Delete the current user's account.

### Update My Account

- **URL:** PATCH /api/v1/users/
- **Description:** Update the current user's account.
- **Required Body:**
  ```json
  {
    "firstName": "String",
    "lastName": "String"
  }
  ```

### Get My Account Data

- **URL:** GET /api/v1/users/
- **Description:** Get the data of the current user's account.
```
