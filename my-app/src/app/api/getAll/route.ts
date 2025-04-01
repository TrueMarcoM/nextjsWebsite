import { NextResponse } from "next/server";
import { db } from "@/lib/utils/db";

export async function GET(req: Request) {
  try {
    const [result] = await db.execute("SELECT * FROM ToDo");

    return NextResponse.json({ success: true, tasks: result }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to get notes" }, { status: 500 });
  }
}
