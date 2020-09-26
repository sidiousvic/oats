require("dotenv").config();
const path = require("path");
const MIGRATION_DIR = path.resolve(__dirname + "/migrations");
const SEED_DIR = path.resolve(__dirname + "/seeds");
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = "127.0.0.1";
const DB_PORT = "5432";
const DB_URL =
  process.env.DB_URL ||
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/oats`;
const TEST_DB_URL =
  process.env.DB_URL ||
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/oats_test`;

module.exports = {
  prod: {
    client: "pg",
    connection: DB_URL || {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: MIGRATION_DIR
    },
    seeds: {
      directory: SEED_DIR
    }
  },
  dev: {
    client: "pg",
    connection: DB_URL || {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: MIGRATION_DIR
    },
    seeds: {
      directory: SEED_DIR
    }
  },
  test: {
    client: "pg",
    connection: TEST_DB_URL || {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: MIGRATION_DIR
    },
    seeds: {
      directory: SEED_DIR
    }
  }
};
