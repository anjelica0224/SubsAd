import { getUserMetadata } from "../auth/clerk.js";
import { findUser } from "../models/userModel.js";

export const getUserDetails = async (req, res) => {
  const clerkUserId = req.params.id;

  //Fetch metadata from Clerk
  const metadata = await getUserMetadata(clerkUserId);

  //Fetch additional data from MongoDB
  const additionalData = await findUser(clerkUserId);

  res.json({ metadata, additionalData });
};
