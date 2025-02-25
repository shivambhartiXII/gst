import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCalculationSchema, insertInvoiceSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/calculations", async (req, res) => {
    try {
      const calculation = insertCalculationSchema.parse(req.body);
      const result = await storage.createCalculation(calculation);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid calculation data" });
    }
  });

  app.post("/api/invoices", async (req, res) => {
    try {
      const invoice = insertInvoiceSchema.parse(req.body);
      const result = await storage.createInvoice(invoice);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid invoice data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
