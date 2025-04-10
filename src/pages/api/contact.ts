import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

console.log("MongoDB URI:", mongoUri); // Log the MongoDB URI for debugging

if (!mongoUri) {
    throw new Error("Neither MONGODB_URI nor MONGO_URI is defined in the environment variables.");
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

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     // Validate the input
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     try {
//       // Connect to MongoDB
//       const client = await clientPromise;
//       const db = client.db("portfolio-db"); // Replace "portfolio-db" with your database name
//       const collection = db.collection("contacts"); // Replace "contacts" with your collection name

//       // Insert the form submission into the database
//       const result = await collection.insertOne({
//         name,
//         email,
//         message,
//         date: new Date(), // Add a timestamp
//       });

//       console.log("Inserted document ID:", result.insertedId);

//       // Send data to Zapier webhook
//       await fetch(process.env.ZAPIER_WEBHOOK as string, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//         }),
//       });

//       // Respond with success
//       return res.status(200).json({ message: "Message stored and sent to Zapier successfully!" });
//     } catch (error) {
//       console.error("Error storing message or sending to Zapier:", error);
//       return res.status(500).json({ error: "Failed to store message or send to Zapier." });
//     }
//   }


//   // Handle unsupported methods
//   res.setHeader("Allow", ["POST"]);
//   return res.status(405).json({ error: `Method ${req.method} not allowed.` });
// }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request IP:", req.headers["x-forwarded-for"] || req.socket.remoteAddress);

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Connect to MongoDB
      const client = await clientPromise;
      const db = client.db("portfolio-db");
      const collection = db.collection("contacts");

      // Insert the form submission into the database
      const result = await collection.insertOne({
        name,
        email,
        message,
        date: new Date(),
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