import { DataSource } from "typeorm";

// export const db: DataSource = new DataSource({
//   type: "postgres",
//   port: 5432,
// });
// vaaaa chera bara mano err dad?

export const db: DataSource = new DataSource({
  type: "mongodb",
  port: 8000,
});         
