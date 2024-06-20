import { MongoClient } from "mongodb";

const uri = "mongodb+srv://todo123:todo123@cluster0.hkwpdie.mongodb.net/todo";
const client = new MongoClient(uri);

const dbName = "todo";
let db: any;

export const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }
  return db;
};
