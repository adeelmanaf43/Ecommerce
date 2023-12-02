import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 } from "uuid";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const user_id = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, user_id));
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const setCookies = cookies();
  const uid = v4();
  const user_id = setCookies.get("user_id")?.value as string;
  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
        image_url: req.image_url,
      })
      .onConflictDoUpdate({
        target: [cartTable.product_title],
        set: {
          product_price: req.product_price,
          product_quantity: req.product_quantity,
        },
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
