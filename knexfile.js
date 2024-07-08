// Update with your config settings.
import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    charset: 'utf8',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
};
