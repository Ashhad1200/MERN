const User  = require("../Model/userSchema");

const Login = async(req , res) => {
    try {
        res.status(200).send("Welcome to the login page")
    } catch (error) {
        console.log(error)
    }
}

const Registration = async(req , res) => {
    try {
        const {username, email, password, phone} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).send("User Already Exist");
        }
        const userCreated = User.create({username, email, password, phone});
        res.status(201).json({msg:userCreated});
    } catch (error) {
        console.log(error)
    }
}


module.exports = {Login, Registration};