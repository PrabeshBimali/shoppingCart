const dotenv = require('dotenv')
const productData = require('./data/products')
const connectDb = require('./config/db')
const Product = require('./models/Product')

dotenv.config()

connectDb();

const importData = async ()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Import Successful");
        process.exit();
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

importData();