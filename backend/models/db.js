import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

let db;

export const connectToDatabase = async () => {
  if (!db) {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("GLink"); // Replace with your database name
  }
  return db;
};
