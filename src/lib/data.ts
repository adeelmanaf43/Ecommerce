import { client } from "./sanityClient";
import { unstable_noStore as noStore } from "next/cache";
const getProductData = async () => {
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name!="Kids"]._id]{title,price,image}`
  );
  return res;
};

export default getProductData;

export const getMaleProductData = async () => {
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Male"]._id ]{title, price, image, typee}`
  );
  return res;
};

export const getFemaleProductData = async () => {
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Female"]._id ]{title, price, image, typee}`
  );
  return res;
};

export const getKidsProductData = async () => {
  const res = await client.fetch(
    `*[_type == "product" && category._ref in *[name=="Kids"]._id ]{title, price, image, typee}`
  );
  return res;
};

export const getSingleProduct = async (title: string) => {
  const params = { titleParam: title };
  const res = await client.fetch(
    `*[_type == "product" && title == $titleParam][0]{title, price, image, typee}`,
    params
    // `*[_type == "product" && title == $title ]{title, price, image, typee}`
  );
  return res;
};
