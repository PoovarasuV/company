import { Router, type IRouter } from "express";
import { sendContactEmail } from "../lib/email";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await sendContactEmail({ name, email, projectType, message });

    logger.info({ email, projectType }, "Contact form submitted successfully");
    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    logger.error({ error }, "Failed to process contact form");
    return res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
