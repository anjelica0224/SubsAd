import express from "express";
import { getUserDetails } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUserDetails); // Fetch user details by Clerk user ID

export default router;
