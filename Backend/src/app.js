import express from "express";
import userRoutes from "../src/routes/userRoutes.js"
import cors from "cors";
import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.DB_URL;

main()
.then(()=>{
    console.log(`Connected to DB`);
})
.catch((err)=>{
    console.log(`Can't connect to DB ${err}`)
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.use("/users", userRoutes);



app.listen(8080, ()=>{
    console.log("Listening yo port 8080");
})