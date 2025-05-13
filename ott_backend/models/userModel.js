import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true, // Fixed: 'require' should be 'required'
    },
    email: {
      type: String,
      required: true, // Fixed: 'require' should be 'required'
    },
    password: {
      type: String,
      required: true, // Fixed: 'require' should be 'required'
    },
  },
  {
    timestamps: true,
  }
);

// Fixed: Declare and export 'User' in one line
const User = mongoose.model("User", userSchema);
export default User;