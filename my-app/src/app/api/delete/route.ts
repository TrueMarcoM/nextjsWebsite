import { NextResponse } from "next/server";
import { db } from "@/lib/utils/db";

export async function DELETE(req: Request) {
  try {
    const { note } = await req.json();

    await db.execute("DELETE FROM ToDo WHERE note = ?", [note]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to delete note" },
      { status: 500 }
    );
  }
}
