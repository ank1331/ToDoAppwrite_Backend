// import { Client, Account, Databases } from 'appwrite';
// import {express} from "express";
// import {v4 as uuidv4} from "uuid";
// const app = express();
// const client = new Client();

// client.setEndpoint("http://localhost/v1").setProject("63b1cd3688bd78659a8d");

// export const account =  new Account(client);

// // database

// export const databases = new Databases(client,"63b1cfef5fe47a089ee4");


// app.post("/", (req,res)=>{
//     const { title } = req.body;
//     async(e)=>{
//         const promise = account.create(
//             uuidv4(),
//             title
//         );
//         promise.then(
//             function(response){
//                 console.log(response);
//             },
//             function(error){
//                 console.log(error);
//             }
//         )

//     }
// });





