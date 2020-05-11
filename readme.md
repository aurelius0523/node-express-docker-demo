## Node-api-view-demo
This repository serves to demonstrate how to setup express to handle both view rendering using `pug` and standard REST api using `express`

### Getting started
##### To run in development mode with hot reload
```bash
npm i
npm run dev
```

##### To run production express server locally
```bash
npm i
npm start
```

##### To run express server in `Docker` with already set-up postgres
```bash
# Note: modify PGURL environment variable in .env file

docker build -t ${name}:${appName} .
docker run -p 3000:3000 ${name}:${appName}
```

##### To run express server with postgres already set-up using Docker Compose
```$xslt
docker-compose build 
docker-compose run
```

##### To run express server with nodemon and postgres already setup using Docker Compose
```bash
docker-compose build
docker-compose -f docker-compose-dev.yml run
``` 

### Learning
1. `Swagger` in node.js doesn't seem to have the capability to auto-generate documentation based on model unlike Java equivalent
1. `express` router can be used as middleware in any layer throughout the code, more flexible than `Spring`'s `Filter` which only works before `Controller`.
1. `docker-compose` can be used to override environment variables in Dockerfile. If you mount root directory to containers `WORKDIR` you can even have hot reload while application is running in `docker-compose`
1. If you need to connect from container A to container B. E.g., to connect from `express` container to `postgres` container, use `host.docker.internal:port` instead of `localhost:port`
1. When using postgres image, additional scripts can be run by creating *.sql scripts and mounting it to the container's `docker-entrypoint-initdb.d` directory. Note that:
   1. `POSTGRES_DATABASE` environment variable should not be passed in if the scripts need to create a database
   2. The scripts are executed in order of their names