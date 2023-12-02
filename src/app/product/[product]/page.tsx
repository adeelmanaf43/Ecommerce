import { getSingleProduct } from "@/lib/data";
import getProductData from "@/lib/data";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { headers } from "next/headers";
import ProductPage from "./ProductPage";

export async function generateStaticParams() {
  const data = await getProductData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}
export default async function Page({ params }: { params: any }) {
  const data = await getSingleProduct(params.product);
  console.log(data);
  return (
    <div className="mt-20">
      <ProductPage data={data} />
    </div>
  );
}
