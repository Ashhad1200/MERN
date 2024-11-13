const verifyToken = require("../MiddleWare/auth");
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
    return res.status(200).json({
      success: "Logged in successfully",
      token: await user.generateToken(),
    });
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

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
    });

    // Send a single response with success and user details
    return res.status(201).json({
      success: "User created successfully",
      token: await userCreated.generateToken(),
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// This is an updated version for Express-based usage.
const AuthMe = (req, res) => {
  try {
    // Access the user details from req.user which was set by verifyToken middleware
    const userDetails = req.user;

    // If userDetails is undefined, something went wrong (e.g., no token or invalid token)
    if (!userDetails) {
      return res
        .status(401)
        .json({ error: "User not found or not authenticated" });
    }

    // Return the user details as a response
    return res.status(200).json({ userDetails });
  } catch (err) {
    console.error("Error fetching Logged User Details", err);
    return res
      .status(500)
      .json({ error: "Error fetching logged user details" });
  }
};

const GetUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // Return the users as JSON with a 200 status code
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users" }); // Return error message
  }
};

const GetUsersById = async (_id) => {
  try {
    const users = await User.findById(_id).exec();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

module.exports = { Login, Registration, GetUsers, GetUsersById, AuthMe };
