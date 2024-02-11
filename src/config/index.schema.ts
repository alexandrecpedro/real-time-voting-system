import "dotenv/config";
import { coerce, object, string } from "zod";

const configVars = process.env;

const configSchema = object({
  PORT: coerce.number().default(3333),
  COOKIE_SECRET: string({
    required_error: "Cookie secret is mandatory!",
  }).trim(),
  POSTGRES_USER: string({
    required_error: "PostgreSQL user is mandatory!",
  }).trim(),
  POSTGRES_PASSWORD: string({
    required_error: "PostgreSQL password is mandatory!",
  }).trim(),
  POSTGRES_DB: string({
    required_error: "PostgreSQL database name is mandatory!",
  }).trim(),
  POSTGRES_PORT: coerce.number().default(5432),
  REDIS_PORT: coerce.number().default(6379),
  DATABASE_URL: string({
    required_error: "Prisma database url reference is mandatory!",
  }).trim(),
});

export const config = configSchema.parse(configVars);
