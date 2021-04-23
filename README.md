## APOLLOGQL

A test API using GraphQL, Express, Apollo and Prisma.

Current database is using `SQLite`. Database file is `dev.db` in the `prisma` directory. Switch to other db provider based on your requirements.

## Install

1. Install dependencies ...

```bash
# Run
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
$ yarn prisma migrate dev --preview-feature
# OR
$ npm run prisma migrate dev --preview-feature
# 2. generate prisma client
$ yarn prisma generate
# OR
$ npm run prisma generate
```

Above steps are required whenever the project entities are updated. Check out prisma docs for further information.

## Start development server

```bash
$ yarn dev # start nodemon
# OR
$ npm run dev
```

Graphql playground will be available at http://localhost:3001/graphql

## View data in database

```bash
# run prisma studio
$ yarn prisma studio
```

Prisma studio will be available at http://localhost:5555

## Author

[Gagan](https://github.com/devtool-0x01/)
