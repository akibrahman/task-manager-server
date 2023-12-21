import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    photo: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);
