import { client } from "./sanityClient";
import { unstable_noStore as noStore } from "next/cache";
const getProductData = async () => {
  noStore();
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name!="Kids"]._id]{title,price,image, slug}`
  );
  return res;
};

export default getProductData;

export const getMaleProductData = async () => {
  noStore();
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Male"]._id ]{title, price, image,typee, slug}`
  );
  return res;
};

export const getFemaleProductData = async () => {
  noStore();
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Female"]._id ]{title, price, image, typee, slug}`
  );
  return res;
};

export const getKidsProductData = async () => {
  noStore();
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Kids"]._id ]{title, price, image, typee, slug}`
  );
  return res;
};

export const getSingleProduct = async (title: string) => {
  noStore();
  const params = { titleParam: title };
  const res = await client.fetch(
    `*[_type == "product" && slug.current == $titleParam][0]`,
    params
    // `*[_type == "product" && title == $title ]{title, price, image, typee}`
  );
  return res;
};
