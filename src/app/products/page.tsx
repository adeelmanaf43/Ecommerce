import getProductData from "@/lib/data";
import AllProductsList from "./AllProductsList";
export default async function Page() {
  const data = await getProductData();
  return (
    <div>
      <AllProductsList data={data} />
    </div>
  );
}
