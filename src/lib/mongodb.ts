import { MongoClient } from "mongodb";

const uri = process.env.MONGEDB_URI!;
const options = { maxPoolSize: 10 };

let client: MongoClient;
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

// Singleton pattern
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

export default clientPromise;
