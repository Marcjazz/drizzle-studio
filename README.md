# Drizzle Studio

Drizzle Studio is a Docker container that provides a user interface for managing databases. It is an alternative to adminer, pgAdmin, and other database management tools. It can be used with any database.

## Usage

To run Drizzle Studio, use the following command:

```
docker run -p 8080:8080 ghcr.io/marcjazz/drizzle-studio:latest
```

Replace `<your-github-username>` with your GitHub username and `<tag>` with the tag of the image you want to run.

## Accessing Drizzle Studio

When running Drizzle Studio in a Docker container, you can access it from your host machine by navigating to `http://localhost:8080` in your web browser.
