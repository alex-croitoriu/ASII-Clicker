const { MongoClient, ServerApiVersion } = require("mongodb");
const credentials = "app/db/X509-cert-636766965244032660.pem";

// MongoDB connection string
const uri =
  "mongodb+srv://asii-clicker.kum8y.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=ASII-Clicker";

let client;
let db;

async function connect() {
  if (!client || !db) {
    client = new MongoClient(uri, {
      tlsCertificateKeyFile: credentials,
      serverApi: ServerApiVersion.v1,
    });
    await client.connect();
    db = client.db('asiiclicker');
    console.log('Connected to MongoDB');
  }
  return db;
}

async function closeConnection() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log('Closed MongoDB connection');
  }
}

module.exports = { connect, closeConnection };
