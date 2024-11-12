const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  isAdmin: { type: Boolean, default: false },
  joiningDate: { type: Date, default: Date.now, required: true },
});

userSchema.methods.generateToken = function () {  // Change to a regular function
  try {
    return jwt.sign(
      {
        id: this._id,
        username: this.username,
        email: this.email,
        phone: this.phone,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET,  // Replace with your secret key, and store it securely in an environment variable
      { expiresIn: "7d" }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};


const User = mongoose.model("User", userSchema);

module.exports = User;