import express from 'express';
const app = express();
import { router } from "../dist/routs/phoneBookRouter.js"


// const db = {
//     port: 5432,
//     type: 'postgres'
// };
// await db(ConnectionOptions);

// db.initialize()
//     .then(() => {
app.use(router);
app.listen(8000, () => {
        console.log("be server vasl shodim");
    })
    // })
    // })
    // .catch((error) => {
    //     console.log("db init error", error);
    // })