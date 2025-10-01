const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  name:     { type: String, required: true, trim: true },
}, { timestamps: true });

 const AdminModel =
  mongoose.models.AdminAuth || mongoose.model("AdminModel", adminSchema);
 module.exports = {AdminModel}