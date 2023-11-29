//"use client";
import { getSingleProduct } from "@/lib/data";
//import { usePathname } from "next/navigation";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
//import { useState } from "react";
import { headers } from "next/headers";
import ProductPage from "./ProductPage";

export default async function Page() {
  const heads = headers();
  const url = heads.get("next-url");
  const title = url?.split("/").slice(-1).join("").replaceAll("-", " ");
  const data = await getSingleProduct(title as string);
  console.log(title);
  return (
    <div className="mt-20">
      <ProductPage data={data} />
    </div>
  );
}
