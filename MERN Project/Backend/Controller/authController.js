const User = require("../Model/userSchema");
const bcrypt = require('bcrypt')


const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            res.status(200).json({ success: "Logged in" });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const Registration = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        const userEmailExist = await User.findOne({ email });
        const userUsernameExist = await User.findOne({ username });
        if (userEmailExist && userUsernameExist) {
            return res.status(400).json({ error: "User Already Exist" });
        }
        const encodedPassword = await bcrypt.hash(password, 6);
        const userCreated = await User.create({ username, email, password: encodedPassword, phone });
        return res.status(201).json({ userDetails: userCreated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { Login, Registration };