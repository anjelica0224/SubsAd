const Teacher = require("../models/teacher");

const handleWebhook = async (req, res) => {
    const { type, data } = req.body;

    try {
        if (type === "user.created") {
            const newTeacher = new Teacher({
                clerkId: data.id,
                name: `${data.first_name} ${data.last_name}`,
                email: data.email_addresses[0]?.email_address,
                availability: true,
                availabilityTimeSlots: [],
            });
            await newTeacher.save();
        } else if (type === "user.updated") {
            await Teacher.findOneAndUpdate(
                { clerkId: data.id },
                {
                    name: `${data.first_name} ${data.last_name}`,
                    email: data.email_addresses[0]?.email_address,
                }
            );
        } else if (type === "user.deleted") {
            await Teacher.findOneAndDelete({ clerkId: data.id });
        }

        res.status(200).send("Webhook processed successfully");
    } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { handleWebhook };
