import AllProductsList from "../products/AllProductsList";
import { getFemaleProductData } from "@/lib/data";
export default async function Page() {
  const femaleData = await getFemaleProductData();
  return (
    <div className="my-20">
      <AllProductsList data={femaleData} />
    </div>
  );
}
