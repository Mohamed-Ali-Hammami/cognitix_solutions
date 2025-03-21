import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from "./emailService"; // import your email service

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(contactData);
      
      // Send email notification after saving the submission
      await sendContactEmail({
        ...contactData,
        company: contactData.company ?? undefined,
        service: contactData.service ?? undefined,
      });
      
      res.status(201).json({ success: true, data: submission });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ success: false, message: validationError.message });
      }
      console.error("Server Error:", error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
