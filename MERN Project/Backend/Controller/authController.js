const User = require("../Model/userSchema");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Success response
    return res.status(200).json({ success: "Logged in successfully" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const Registration = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // Validate input
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email or username already exists
    const userEmailExist = await User.findOne({ email });
    if (userEmailExist) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    const userUsernameExist = await User.findOne({ username });
    if (userUsernameExist) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Hash password (use salt rounds of 10 or more)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
    });

    // Return newly created user
    return res.status(201).json({ userDetails: userCreated });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { Login, Registration };
