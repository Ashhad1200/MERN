const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/mern");
        await mongoose.connect("mongodb+srv://ashhad12009:NvYnk6I7qAAWGVjx@userlist.ubuai.mongodb.net/userList?retryWrites=true&w=majority");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Connection Failed", error);
        process.exit(1);
    }
};

module.exports = connectDb;