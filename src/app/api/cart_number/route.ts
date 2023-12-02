import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const user_id = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = (
      await db.select().from(cartTable).where(eq(cartTable.user_id, user_id))
    ).length;
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
  }
};
