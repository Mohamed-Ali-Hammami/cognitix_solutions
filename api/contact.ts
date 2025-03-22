// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../client/src/utils/schema.js';
import { storage } from '../client/src/utils/storage.js'; // adjust the path as needed
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { sendContactEmail } from '../client/src/utils/emailService.js'; // adjust the path as needed

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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
}
