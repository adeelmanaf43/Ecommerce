import AllProductsList from "../products/AllProductsList";
import { getKidsProductData } from "@/lib/data";

export default async function Page() {
  const kidsData = await getKidsProductData();
  return (
    <div>
      <AllProductsList data={kidsData} />
    </div>
  );
}
