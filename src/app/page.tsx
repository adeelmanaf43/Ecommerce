import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Promotion from "./components/Promotion";
import ProductsList from "./components/ProductsList";
import getProductData from "@/lib/data";
import Section from "./components/Section";
import NewsLetter from "./components/NewsLetter";
import Contacts from "./components/Contacts";
export default async function Home() {
  const data = await getProductData();
  return (
    <div>
      <Hero />
      <Promotion />
      <ProductsList data={data} />
      <Section />
      <NewsLetter />
    </div>
  );
}
