import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq, and } from "drizzle-orm";

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
  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
        total_price: req.total_price,
        image_url: req.image_url,
      })
      .onConflictDoUpdate({
        target: [cartTable.product_title, cartTable.user_id],
        set: {
          total_price: req.total_price,
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

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    if (req.user_id && req.product_title) {
      const res = await db
        .delete(cartTable)
        .where(
          and(
            eq(cartTable.user_id, req.user_id),
            eq(cartTable.product_title, req.product_title)
          )
        );
      return NextResponse.json({
        message: `Product ${req.product_title} successfully deleted`,
      });
    } else {
      return NextResponse.json({ message: "Missing required field" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PUT = async (request: NextRequest) => {
  const req = await request.json();
  try {
    if (
      req.user_id &&
      req.product_title &&
      req.product_price &&
      req.product_quantity &&
      req.total_price
    ) {
      const res = await db
        .update(cartTable)
        .set({
          product_quantity: req.product_quantity,
          total_price: req.product_price * req.product_quantity,
        })
        .where(
          and(
            eq(cartTable.user_id, req.user_id),
            eq(cartTable.product_title, req.product_title)
          )
        );
      return NextResponse.json({ message: "Item updated successfully" });
    } else {
      return NextResponse.json({ message: "Missing Required fields" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
