import { connectToDatabase } from "./db.js";

export const findUser = async (clerkUserId) => {
  const db = await connectToDatabase();
  return await db.collection("users").findOne({ clerkUserId });
};

export const updateUser = async (clerkUserId, additionalData) => {
  const db = await connectToDatabase();
  return await db.collection("users").updateOne(
    { clerkUserId },
    { $set: additionalData },
    { upsert: true }
  );
};
