import { client } from "./sanityClient";
import { unstable_noStore as noStore } from "next/cache";
const getProductData = async () => {
  // noStore();
  const res = await client.fetch(`*[_type == "product"]{title,price,image}`);
  return res;
};

export default getProductData;
