import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB);

      const { timestamp, moisture, vibration, current } = req.body;

      const result = await db.collection("monitoring").insertOne({
        timestamp,
        moisture,
        vibration,
        current,
      });

      res.status(200).json({ success: true, id: result.insertedId });
    } catch (err) {
      console.error("MongoDB Store Error:", err);
      res.status(500).json({ error: "Failed to store data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
