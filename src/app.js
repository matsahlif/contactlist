import express from 'express';
const app = express();
import { db } from '.. / dataSource /db.js'

// const db = {
//     port: 5432,
//     type: 'postgres'
// };
// await db(ConnectionOptions);

db.initialize()
    .then(() => {
        app.listen(8000, () => {
            console.log("be server vasl shodim");
        })
    })
    .catch((error) => {
        console.log("db init error", error);
    });