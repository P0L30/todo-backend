import { MongoClient } from "mongodb";

const uri = "mongodb+srv://todo123:todo123@cluster0.hkwpdie.mongodb.net/todo";
const client = new MongoClient(uri);

const dbName = "todo";
let db: any;

const connectToDatabase = async () => {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }
  return db;
};

export const resolvers = {
  Query: {
    todos: async () => {
      const database = await connectToDatabase();
      return database.collection("todos").find().toArray();
    },
  },
  Mutation: {
    addTodo: async (
      _: any,
      { text, group }: { text: string; group: string }
    ) => {
      const database = await connectToDatabase();
      const newTodo = {
        text,
        group,
        completed: false,
      };
      const result = await database.collection("todos").insertOne(newTodo);
      return {
        id: result.insertedId,
        ...newTodo,
      };
    },
  },
};
