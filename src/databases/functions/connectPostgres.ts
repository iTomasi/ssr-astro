import { postgres } from "../postgres"

const connectPostgres = async () => {
  await postgres.authenticate();
  await postgres.sync({ alter: true });

  return true
};

export default connectPostgres;