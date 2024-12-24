import {Webhook} from "svix";
import User from "../models/commonUser.js";


const clerkWebhooks = async (req, res) => {
    try {
        const payloadString = req.body.toString();
        const svixHeaders = req.headers;

        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
        const evt = wh.verify(payloadString, svixHeaders);
        const { id, ...attributes } = evt.data;
        // Handle the webhooks
        const eventType = evt.type;
        if (eventType === 'user.created') {
          console.log(`User ${id} was ${eventType}`);
          const firstName = attributes.first_name;
          const lastName = attributes.last_name;

          const user = new User({
            clerkUserId: id,
            firstName: firstName,
            lastName: lastName,
          });

          await user.save();
          console.log('User saved to database');
        }
        res.status(200).json({
          success: true,
          message: 'Webhook received',
        });

        // console.log(req.body)
        console.log("hello!!")
        res.status(200).send("Webhook processed successfully");

    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).send("Internal Server Error");
    }
};

export {clerkWebhooks};
