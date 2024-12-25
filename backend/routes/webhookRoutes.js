import express from 'express'
import { clerkWebhooks } from '../controllers/webhookController.js';
import bodyParser from 'body-parser';
const userRouter = express.Router();

userRouter.post("/webhooks", 
    bodyParser.raw({ type: 'application/json' }),
    clerkWebhooks);

export default userRouter;
