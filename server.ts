import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // Ensure data directory exists for contact submissions storage
  const dataDir = path.join(process.cwd(), "data");
  const contactsFilePath = path.join(dataDir, "contacts.json");

  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: recursiveOption() });
    } catch (e) {
      console.warn("Could not create data dir", e);
    }
  }

  function recursiveOption() {
    return true;
  }

  function getStoredContacts() {
    try {
      if (fs.existsSync(contactsFilePath)) {
        const raw = fs.readFileSync(contactsFilePath, "utf-8");
        return JSON.parse(raw);
      }
    } catch (err) {
      console.error("Error reading contacts file:", err);
    }
    return [
      {
        id: "sample-1",
        name: "Elena Rostova",
        email: "elena@luxe-resort.cr",
        phone: "+506 8812-4432",
        company: "Pacific Pearl Boutique Hotel",
        projectType: "Website / Redesign + Branding",
        budget: "$6,000 - $10,000",
        timeline: "1-2 Months",
        message: "Hi Fernanda, we love the XIII aesthetic. We need a complete digital overhaul for our luxury hotel in Papagayo to boost direct bookings.",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        read: true,
        status: "new",
      }
    ];
  }

  function saveStoredContacts(contacts: any[]) {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2), "utf-8");
    } catch (err) {
      console.error("Error saving contacts file:", err);
    }
  }

  // --- API ROUTES ---
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "XIII Art & Design Studio API" });
  });

  // GET /api/contact - List all submissions
  app.get("/api/contact", (_req, res) => {
    const contacts = getStoredContacts();
    res.json({ success: true, count: contacts.length, data: contacts });
  });

  // POST /api/contact - Submit new contact form inquiry
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, company, projectType, budget, timeline, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required fields.",
      });
    }

    const newInquiry = {
      id: "inq_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      company: company ? company.trim() : "",
      projectType: projectType || "General Inquiry",
      budget: budget || "Flexible",
      timeline: timeline || "Asap",
      message: message.trim(),
      createdAt: new Date().toISOString(),
      read: false,
      status: "new",
    };

    const currentContacts = getStoredContacts();
    currentContacts.unshift(newInquiry);
    saveStoredContacts(currentContacts);

    console.log("📥 New XIII Studio Contact Form Submission Received:", newInquiry.name, newInquiry.email);

    return res.status(201).json({
      success: true,
      message: "Inquiry received successfully! Fernanda will get back to you within 24 hours.",
      data: newInquiry,
    });
  });

  // PATCH /api/contact/:id - Mark as read or update status
  app.patch("/api/contact/:id", (req, res) => {
    const { id } = req.params;
    const { read, status } = req.body;
    const currentContacts = getStoredContacts();
    const item = currentContacts.find((c: any) => c.id === id);

    if (!item) {
      return res.status(404).json({ success: false, error: "Submission not found" });
    }

    if (read !== undefined) item.read = Boolean(read);
    if (status !== undefined) item.status = status;

    saveStoredContacts(currentContacts);
    res.json({ success: true, data: item });
  });

  // DELETE /api/contact/:id - Delete a submission
  app.delete("/api/contact/:id", (req, res) => {
    const { id } = req.params;
    let currentContacts = getStoredContacts();
    const initialLen = currentContacts.length;
    currentContacts = currentContacts.filter((c: any) => c.id !== id);

    if (currentContacts.length === initialLen) {
      return res.status(404).json({ success: false, error: "Submission not found" });
    }

    saveStoredContacts(currentContacts);
    res.json({ success: true, message: "Submission removed" });
  });

  // --- VITE MIDDLEWARE / PRODUCTION STATIC ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`XIII Studio Server running on http://localhost:${PORT}`);
  });
}

startServer();
