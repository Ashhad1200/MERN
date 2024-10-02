const mongoose = require("mongoose");

const connectDb = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mern");
    } catch (error) {
        console.error("connection Falied");
        process.exit();
    }
}
module.exports = connectDb;