const { connect, closeConnection } = require("../../db/dao");

export async function GET(request) {
  try {
    const db = await connect();

    const collection = db.collection("review");

    const result = await collection.find({}).toArray();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: Request) {}
