import AllProductsList from "../products/AllProductsList";
import { getMaleProductData } from "@/lib/data";
export default async function Page() {
  const maleData = await getMaleProductData();
  return (
    <div>
      <AllProductsList data={maleData} />
    </div>
  );
}
