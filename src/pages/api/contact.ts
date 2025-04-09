import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

// Create a global variable to store the MongoClient instance
declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!(global as NodeJS.Global)._mongoClientPromise) {
  client = new MongoClient(mongoUri);
  (global as NodeJS.Global)._mongoClientPromise = client.connect();
}
clientPromise = (global as NodeJS.Global)._mongoClientPromise!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
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