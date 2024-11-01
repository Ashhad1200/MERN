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

userSchema.methods.genrateToken = async () => {
  try {
    return jwt.sign(
      {
        id: this._id,
        username: this.username,
        email: this.email,
        phone: this.phone,
        isAdmin: this.isAdmin,
      },
      "blabla",
      { expiresIn: "7d" }
    )
  } catch (error) {
    console.error(error);
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;