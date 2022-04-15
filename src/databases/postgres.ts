import { Sequelize } from "sequelize";
import pg from "pg"

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DB_NAME } = import.meta.env;

const HOST = POSTGRES_HOST || process.env.POSTGRES_HOST || "";
const PORT = POSTGRES_PORT || process.env.POSTGRES_PORT || 5432;
const USERNAME = POSTGRES_USERNAME || process.env.POSTGRES_USERNAME || "postgres"
const PASSWORD = POSTGRES_PASSWORD || process.env.POSTGRES_PASSWORD || "password"
const DB_NAME = POSTGRES_DB_NAME || process.env.POSTGRES_DB_NAME || "postgres"

export const postgres = new Sequelize(`postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`, {
  dialect: "postgres",
  dialectModule: pg
})