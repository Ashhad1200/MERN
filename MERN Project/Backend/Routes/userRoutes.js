const express = require("express");
const User = require("../Controller/userController");
const {
  GetUsers,
  GetUsersById,
  AuthMe,
  DeleteUsers,
} = require("../Controller/authController");
const { default: mongoose } = require("mongoose");
const userRoutes = express.Router();

userRoutes.get("/users", GetUsers);

userRoutes.get("/profile", AuthMe);

userRoutes.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  // Validate the user ID
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await GetUsersById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

userRoutes.delete = ("/users/:id",DeleteUsers);

module.exports = userRoutes;
