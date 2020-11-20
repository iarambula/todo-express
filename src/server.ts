import { createConnection } from "typeorm";

const start = async () => {
  await createConnection();
  import("./app");
};

start();
