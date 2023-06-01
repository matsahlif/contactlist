import express from 'express';
import { db } from './dataSource/db';

const app = express();
// const db : ConnectionOptions = {
//     port : 5432,
//    type : 'postgres'
// }
// //export
// await createConnection(db) 

// app.listen(db.port,()=>{
//     console.log("be srver vasl shodim");
// })
// app.on('error',()=>{
//     console.log("vasl nashod ;(");
// })

// export default app

// in foldero haaaaaatman befahm 
db.initialize()
.then(()=>{
    app.listen(8000,()=>{    console.log("be server vasl shodim");
})
})
.catch((error:any)=>{
    console.log("db init error", error);
});
