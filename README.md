# Todo App

Todo app built with ExpressJS and TypeScript

## Requirements

* PostgreSQL

## Getting Started

To get started, review `ormconfig.json` and update credentials to match your database. Don't forget to create a `todoapp` database.

Run the following commands to start the app:

```
$ npm install
$ npm run dev
```

## RESTful Routing

With a Todo resource, we use the following routes to create, read, update, and destroy a Todo resource.

```
GET /todos          # todo list
GET /todos/new      # new todo form
POST /todos         # create todo
GET /todos/:id      # read todo
GET /todos/:id/edit # edit todo form
PATCH /todos/:id    # update todo
DELETE /todos/:id   # destroy todo
```

## TypeORM

In this project, we use [TypeORM](https://github.com/typeorm/typeorm) to interface with a PostgreSQL database. We have a `Todo` entity that defines our columns.

## PugJS

To render html, here we'll the templating engine [PugJS](https://github.com/pugjs/pug).