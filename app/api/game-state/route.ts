const { connect, closeConnection } = require("../../db/dao");

export async function GET(request) {
  try {
    const db = await connect();

    const collection = db.collection("game-state");

    const result = await collection.find({}).toArray();

    return new Response(JSON.stringify(result[0]), {
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
    const gameState = await request.json();
    const db = await connect();
    const collection = db.collection("game-state");

    const response = await collection.updateOne(
      {},
      {
        $set: {
          frameworks: gameState.frameworks,
          lifetimeFrameworks: gameState.lifetimeFrameworks,
          frameworksPerClick: gameState.frameworksPerClick,
          frameworksPerSecond: gameState.frameworksPerSecond,
        },
      },
      { upsert: false, returnDocument: "after" }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving game state:", error);
    return new Response(
      JSON.stringify({ error: "Failed to save game state" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
