const Auth = require("../models/auth.model");
const jwt = require("jsonwebtoken");

// Helper: Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register
exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Create user
    const user = await Auth.create({ name, email, password });

    // Generate token for the user
    const token = generateToken(user._id);
    
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(400).json({ message: "User registration failed", error: error.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the hashed password with the input password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Login failed", error: error.message });
  }
};
