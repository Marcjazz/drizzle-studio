import { defineConfig } from "drizzle-kit";
import { Dialect } from "drizzle-orm";
import { exit } from "process";

const { DATABASE_URL, DIALECT } = process.env;

const supportedDialects = [
  "mysql",
  "sqlite",
  "singlestore",
  "gel",
  "postgresql",
  "turso",
];

if (!DIALECT) {
  console.error(
    `No DIALECT environment variable set. Please set it to one of the followings: ${supportedDialects.join(
      ","
    )}`
  );

  exit(0);
}

if (!supportedDialects.includes(DIALECT as Dialect)) {
  console.error(
    `Invalid DIALECT value: ${DIALECT}. Supported values are: ${supportedDialects.join(
      ", "
    )}`
  );
  exit(0);
}

if (!DATABASE_URL) {
  console.error(
    "No DATABASE_URL environment variable set. Please set it to your database connection string."
  );
  exit(0);
}

export default defineConfig({
  out: "./drizzle",
  dialect: DIALECT as any,
  dbCredentials: {
    url: DATABASE_URL,
  },
});
