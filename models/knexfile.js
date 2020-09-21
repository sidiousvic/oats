/* You may need to fix this file? */

const DATABASE_USER = process.env.DB_USER;
const DATABASE_HOST = "127.0.0.1";
const DATABASE_PORT = "5432";
const DATABASE_URL =
  process.env.DB_URL ||
  `postgres://${process.env.DB_USER}@127.0.0.1:5432/notes_app`;

module.exports = {
  client: "pg",
  connection: DATABASE_URL || {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
  },
  searchPath: "public",
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

/* Questions

In `connection`, what is `process.env.DATABASE_URL`?
What does this line do?
Why can't you just use `localhost:5432`?

Your Answer Here

*/
