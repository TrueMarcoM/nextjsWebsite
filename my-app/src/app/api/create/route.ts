import { NextResponse } from "next/server";
import { db } from "@/lib/utils/db";

export async function POST(req: Request) {
  try {
    const { note } = await req.json();
    console.log(note);

    const [result] = await db.execute("INSERT INTO ToDo (note) VALUES (?)", [
      note,
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to create post." },
      { status: 500 }
    );
  }
}
