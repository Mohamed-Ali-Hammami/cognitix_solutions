// storage.ts
import { type InsertContact } from "./schema.js";

export interface IStorage {
  // Contact methods
  createContactSubmission(contact: InsertContact): Promise<InsertContact & { id: number }>;

}

export class MemStorage implements IStorage {
  private contacts = new Map<number, InsertContact & { id: number }>();
  private currentContactId = 1;
  // Contact methods
  async createContactSubmission(contact: InsertContact) {
    const id = this.currentContactId++;
    const submission = { ...contact, id };
    this.contacts.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();