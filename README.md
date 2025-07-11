# Dockerized Drizzle Studio

Drizzle Studio is a Docker container that provides a user interface for managing databases. It is an alternative to adminer, pgAdmin, and other database management tools. It can be used with any database.

## Usage

To run Drizzle Studio, use the following command:

```
 docker run -p 4983:4983 \ 
  -e "DIALECT=postgresql" \
  -e "DATABASE_URL=postgresql://postgres:O26bQI32vYJlqDNp634lP8ZQ@postgres:5432/lnfootdb" \
  --name drizzle-studio --rm -d ghcr.io/marcjazz/drizzle-studio:latest

  # Add drizzle-studio to your database network
  docker network connect posgres_network drizzle-studio
```


## Accessing Drizzle Studio

When running Drizzle Studio in a Docker container, you can access it from your host machine by navigating to `http://localhost:8080` in your web browser.
