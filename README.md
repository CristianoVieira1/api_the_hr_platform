<p align="center"><a href="#" target="_blank"><img src="https://github.com/CristianoVieira1/client/blob/master/public/img/hr.svg" width="400"></a></p>

# Plataforma de vagas e e-commerce

## Requirements

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or use Docker.

The configuration to the Database can be found on [config/database.js](config/database.js)

## Development

After cloning this project, install the dependencies:

```
yarn install
```

And run using:

```
yarn develop
```

The urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

The first time to access the Admin you'll need to create an user.

## Populate data

This project uses a `/hr/populate` route in order to populate the data via GoG site.
In order to make it work, follow the steps:

- Go to Roles & Permissions > Public and make sure `hr:populate` route is public available and the upload as well
- With Strapi running run the following comand in your console:

```bash
$ curl -X POST http://localhost:1337/hr/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/hr/populate?page=2
$ curl -X POST http://localhost:1337/hr/populate?search=simcity
$ curl -X POST http://localhost:1337/hr/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/hr/populate?availability=coming&sort=popularity
```
