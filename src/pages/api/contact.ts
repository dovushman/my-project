import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import rateLimit from "express-rate-limit";

// Rate limiter: Limit each IP to 10 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: { error: "Too many requests, please try again later." },
});

const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

/* eslint-disable no-var */
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
/* eslint-enable no-var */

const clientPromise: Promise<MongoClient> = global._mongoClientPromise || new MongoClient(mongoUri).connect();

if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise;
}

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apply rate limiter
  await new Promise((resolve, reject) => {
    limiter(req as any, res as any, (result: any) => (result instanceof Error ? reject(result) : resolve(result)));
  });

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    try {
      // Connect to MongoDB
      const client = await clientPromise;
      const db = client.db("portfolio-db"); // Replace "portfolio-db" with your database name
      const collection = db.collection("contacts"); // Replace "contacts" with your collection name

      // Insert the form submission into the database
      const result = await collection.insertOne({
        name,
        email,
        message,
        date: new Date(), // Add a timestamp
      });

      console.log("Inserted document ID:", result.insertedId);

      // Send data to Zapier webhook
      await fetch(process.env.ZAPIER_WEBHOOK as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
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