import express from "express";
import { connectToDatabase } from "../models/db.js";

const router = express.Router();

router.post("/webhook", async (req, res) => {
  const { data } = req.body;
  const { id, publicMetadata } = data;

  const db = await connectToDatabase();
  await db.collection("users").updateOne(
    { clerkUserId: id },
    { $set: { metadata: publicMetadata } },
    { upsert: true }
  );

  res.status(200).send("Synced");
});

export default router;