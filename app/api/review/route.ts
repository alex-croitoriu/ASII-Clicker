const { connect, closeConnection } = require("../../db/dao");

export async function GET(_) {
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

export async function POST(request: Request) {
  try {
    const newReview = await request.json();
    const db = await connect();
    const collection = db.collection("review");

    const result = await collection.insertOne({
      name: newReview.name,
      text: newReview.message,
      rating: newReview.rating,
      date: new Date().toISOString(),
    });

    if (!result) {
      return new Response(JSON.stringify({ error: "Document not added" }), {
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
