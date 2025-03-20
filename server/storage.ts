// storage.ts
import { users, type User, type InsertUser } from "@shared/schema";
import { type InsertContact, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact methods
  createContactSubmission(contact: InsertContact): Promise<InsertContact & { id: number }>;
  
  // Newsletter methods
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<InsertNewsletter & { id: number }>;
}

export class MemStorage implements IStorage {
  private users = new Map<number, User>();
  private contacts = new Map<number, InsertContact & { id: number }>();
  private newsletters = new Map<number, InsertNewsletter & { id: number }>();
  private currentUserId = 1;
  private currentContactId = 1;
  private currentNewsletterId = 1;

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact methods
  async createContactSubmission(contact: InsertContact) {
    const id = this.currentContactId++;
    const submission = { ...contact, id };
    this.contacts.set(id, submission);
    return submission;
  }

  // Newsletter methods
  async createNewsletterSubscription(newsletter: InsertNewsletter) {
    const id = this.currentNewsletterId++;
    const subscription = { ...newsletter, id };
    this.newsletters.set(id, subscription);
    return subscription;
  }
}

export const storage = new MemStorage();