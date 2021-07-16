require('dotenv').config()
const express = require("express")
const connectDb = require('./config/db')
const app = express()
const productRoute = require("./routes/productRoute")
const cors = require("cors")

const PORT = process.env.PORT 

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.use("/api/products", productRoute);

app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`)
    connectDb();
})