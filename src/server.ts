import { createConnection } from "typeorm";

const start = async () => {
  await createConnection();
  await import("./app");
};

start();
