import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;