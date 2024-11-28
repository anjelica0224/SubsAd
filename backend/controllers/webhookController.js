import {Webhook} from "svix";
import adminModel from "../models/school.js";
import subsModel from "../models/teachers.js";

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const { data, type } = req.body;
        const userType = req.headers["user-type"] || localStorage.getItem("userType"); 
        const userModel = userType === "admin" ? adminModel : subsModel;
        switch (type) {
            case "user.created": {
              //Common fields for creation
              const userData = {
                clerkId: data.id,
                email: data.email_addresses[0]?.email_address,
                firstname: data.first_name,
                lastname: data.last_name,
                photo: data.image_url,
              };
              if (userType === "subs") {
                Object.assign(userData, {
                  qualifications: data.qualifications,
                  experience: data.experience,
                  gradesTaught: data.gradesTaught,
                  availability: data.availability,
                  availabilityTimeSlots: data.availabilityTimeSlots,
                  contactInfo: data.contactInfo,
                });
              } else if (userType === "admin") {
                Object.assign(userData, {
                  name: data.name,
                  operationalHours: data.operationalHours,
                  contactInfo: data.contactInfo,
                  grades_upto: data.grades_upto,
                });
              }
      
              await userModel.create(userData);
              res.json({ message: `${userType} created successfully` });
              break;
            }
      
            case "user.updated": {
              const userData = {
                email: data.email_addresses[0]?.email_address,
                firstname: data.first_name,
                lastname: data.last_name,
                photo: data.image_url,
              };
      
              if (userType === "subs") {
                Object.assign(userData, {
                  qualifications: data.qualifications,
                  experience: data.experience,
                  gradesTaught: data.gradesTaught,
                  availability: data.availability,
                  availabilityTimeSlots: data.availabilityTimeSlots,
                  contactInfo: data.contactInfo,
                });
              } else if (userType === "admin") {
                Object.assign(userData, {
                  name: data.name,
                  operationalHours: data.operationalHours,
                  contactInfo: data.contactInfo,
                  grades_upto: data.grades_upto,
                });
              }
      
              await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
              res.json({ message: `${userType} updated successfully` });
              break;
            }
      
            case "user.deleted": {
              await userModel.findOneAndDelete({ clerkId: data.id });
              res.json({ message: `${userType} deleted successfully` });
              break;
            }
      
            default:
              res.status(400).json({ error: "Invalid type" });
              break;
          }
        console.log(req.body)
        console.log("hello!!")
        res.status(200).send("Webhook processed successfully");
    } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).send("Internal Server Error");
    }
};

export {clerkWebhooks};
