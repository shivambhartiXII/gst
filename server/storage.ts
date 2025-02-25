import { users, type User, type InsertUser } from "@shared/schema";
import { 
  type Calculation, 
  type InsertCalculation,
  type Invoice,
  type InsertInvoice
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCalculation(calculation: InsertCalculation): Promise<Calculation>;
  createInvoice(invoice: InsertInvoice): Promise<Invoice>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private calculations: Map<number, Calculation>;
  private invoices: Map<number, Invoice>;
  currentId: number;
  private calcId: number;
  private invoiceId: number;

  constructor() {
    this.users = new Map();
    this.calculations = new Map();
    this.invoices = new Map();
    this.currentId = 1;
    this.calcId = 1;
    this.invoiceId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCalculation(insertCalc: InsertCalculation): Promise<Calculation> {
    const id = this.calcId++;
    const calculation: Calculation = {
      ...insertCalc,
      id,
      calculatedAt: new Date(),
    };
    this.calculations.set(id, calculation);
    return calculation;
  }

  async createInvoice(insertInv: InsertInvoice): Promise<Invoice> {
    const id = this.invoiceId++;
    const invoice: Invoice = {
      ...insertInv,
      id,
      createdAt: new Date(),
    };
    this.invoices.set(id, invoice);
    return invoice;
  }
}

export const storage = new MemStorage();