import AllProductsList from "../products/AllProductsList";
import { getKidsProductData } from "@/lib/data";

export default async function Page() {
  const kidsData = await getKidsProductData();
  return (
    <div className="my-20">
      <AllProductsList data={kidsData} />
    </div>
  );
}
