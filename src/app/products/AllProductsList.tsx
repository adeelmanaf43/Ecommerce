import AllProduct from "./AllProducts";
import getProductData from "@/lib/data";
import Link from "next/navigation";
export default async function AllProductsList({ data }: any) {
  return (
    <div className="mt-20 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-y-8">
      {data.map((item: any) => {
        return (
          <AllProduct
            key={item.id}
            title={item.title}
            price={item.price}
            typee={item.typee}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
