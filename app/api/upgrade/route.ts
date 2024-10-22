import { ObjectId } from "mongodb";

const { connect, closeConnection } = require("../../db/dao");

export async function GET(_) {
  try {
    const db = await connect();

    const collection = db.collection("upgrade");

    let result = await collection.find({}).toArray();

    result.sort((a, b) => a.tree[0].upgradeCost - b.tree[0].upgradeCost)

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

export async function POST(request: Request) {
  try {
    const { _id, newLevel } = await request.json();

    if (!_id || !ObjectId.isValid(_id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const db = await connect();
    const collection = db.collection("upgrade");

    console.log(_id, newLevel);

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { level: newLevel } },
      { returnDocument: "after" }
    );

    if (!result) {
      return new Response(JSON.stringify({ error: "Document not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling POST request:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
