## APOLLOGQL

A simple API using GraphQL, Express, Apollo and Prisma.

Current database is using `SQLite`. Database file is `dev.db` in the prisma directory.
Switch to other db provider based on your requirements.

## Install

1. Install dependencies ...

```bash
#Run
$ yarn install
# OR
$ npm install
```

2. Set up env

   Create a `.env` file or copy `.env.example` file as `.env` and add/update `DATABASE_URL` variable in the file. To use SQLite, set it to `file:./dev.db`. To switch to other db provider, you will also need to change the db provider in `schema.prisma` file in the `prisma` directory.

## Running the project

You can use yarn or npm to run the following:

```bash
# 1. migrate database/apply migrations
$ yarn prisma migrate --experimental
# 2. generate prisma client
$ yarn prisma generate
```

Above steps are required whenever the project entities are updated.

### Start dev server

```bash
$ yarn dev # start nodemon
```

## Author

[Gagan](https://github.com/devtool-0x01/)
