import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// MongoDB connection setup
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

// Use interface instead of module augmentation with var
interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>;
}

// Using type assertion to access the global property
const globalWithMongo = globalThis as GlobalWithMongo;

if (!globalWithMongo._mongoClientPromise) {
  globalWithMongo._mongoClientPromise = new MongoClient(mongoUri).connect();
}
const clientPromise: Promise<MongoClient> = globalWithMongo._mongoClientPromise!;

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Please fill out the name field." });
    }
    
    if (!email || email.trim() === "") {
      return res.status(400).json({ error: "Please fill out the email field." });
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Please fill out the message field." });
    }

    try {
      // Connect to MongoDB
      const client = await clientPromise;
      const db = client.db("portfolio-db"); // Replace "portfolio-db" with your database name
      const collection = db.collection("contacts"); // Replace "contacts" with your collection name

      // Insert the form submission into the database
      const result = await collection.insertOne({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        date: new Date(), // Add a timestamp
      });

      console.log("Inserted document ID:", result.insertedId);

      // Send data to Zapier webhook
      if (!process.env.ZAPIER_WEBHOOK) {
        console.error("Zapier webhook URL is not defined.");
        return res.status(500).json({ error: "Zapier webhook URL is missing." });
      }

      await fetch(process.env.ZAPIER_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      // Respond with success
      return res.status(200).json({ message: "Message stored and sent to Zapier successfully!" });
    } catch (error) {
      console.error("Error storing message or sending to Zapier:", error);
      return res.status(500).json({ error: "Failed to store message or send to Zapier." });
    }
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: `Method ${req.method} not allowed.` });
}
