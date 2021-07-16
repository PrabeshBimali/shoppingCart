const mongoose=require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI, 
            {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, ()=>{
            console.log("Conneted to the Database....")
        });
    }catch(error){
        console.error("MongoDb connection failed");
        process.exit(1);
    }
}

module.exports = connectDb;