 // adjust path as needed

const { genAdminToken } = require("../../Middleware/genToken");
const { AdminModel } = require("../../Models/adminModel");

// Controller: POST /api/admin/login
 const adminLogin = async (req, res) => {
  console.log(req.body)
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Find admin by username + password
    const admin = await AdminModel.findOne({ username, password });

    if (admin) {
      console.log(admin._id)
      return res.status(200).json({
       token : genAdminToken(admin._id),
        details: {
          name: admin.name,
        },
      });
    } else {
      return res.status(201).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error in adminLogin:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
 const addAdmin = async (req, res) => {
  console.log(req.body)
  try {
    const { username, name, password } = req.body;

    if (!username || !name || !password) {
      return res.status(400).json({ message: "Username, name, and password are required" });
    }

    // Check if username already exists
    const existing = await AdminModel.findOne({ username });
    if (existing) {
      return res.status(201).json({ message: "Username already exists" });
    }

    // Create new admin
    const newAdmin = new AdminModel({ username, name, password });
    await newAdmin.save();

    return res.status(201).json({
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Error in addAdmin:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {adminLogin , addAdmin}