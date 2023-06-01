import express from 'express';
const app = express();
import { createConnection } from 'typeorm';
const db = {
    port: 5432,
    type: 'postgres'
};
await createConnection(db);
app.listen(db.port, () => {
    console.log("be srver vasl shodim");
});
app.on('error', () => {
    console.log("vasl nashod ;(");
});
