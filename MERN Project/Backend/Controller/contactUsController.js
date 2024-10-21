const Info = require("../Model/contactSchema");

const FeedBackForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const feedBackCreated = await Info.create({
            name,
            email,
            message
        });

        return res.status(201).json({
            success: "Feedback Sent successfully",
            contactDetails: feedBackCreated
        });
        
    } catch (error) {
        console.error("Submission error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { FeedBackForm };
