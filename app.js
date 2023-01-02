
import { Client, Account, Databases, ID} from 'appwrite';
import express from "express";
import {v4 as uuidv4} from "uuid";
const app = express();
const client = new Client();


client.setEndpoint("http://localhost/v1").setProject("63b1cd3688bd78659a8d");

const account =  new Account(client);

const databases = new Databases(client,"63b1cfef5fe47a089ee4");

app.use(express.json());
app.use(express.urlencoded());

app.post("/", (req,res)=>{
    const { name, email, password } = req.body;
    const signupuser = async(e)=>{
        account.create(
            uuidv4(),
            email,
            password,
            name,
            )
            .then(
                res.status(201).send({
                    success:true,
                    message: "User Created Successfully",
                    }),
            )
    }
    signupuser();
    
});

app.get("/login", async (req,res)=>{
    const {email, password} = req.body;
    try {
        await account.createEmailSession(email,password);
        res.status(200).json({
            success:true,
            message: "Login Successful"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Unable to Login, check email and password"
        })
    }
})

app.get("/createtask", async (req,res)=>{
    const {todo,Task} = req.body;
    try {
        databases.createDocument("63b1cfef5fe47a089ee4", "63b1d0084f4f246a564b",uuidv4(),{
            todo,Task
        });
        res.status(200).json({
            success:true,
            message:"added data to database"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"unable to add data"
        })
    }   
})    

app.listen(4000,()=>{
    console.log("listening...");
})