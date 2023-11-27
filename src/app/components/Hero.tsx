import Feature1 from "/public/Featured1.webp";
import Feature2 from "/public/Featured2.webp";
import Feature3 from "/public/Featured3.webp";
import Feature4 from "/public/Featured4.webp";
import Header from "/public/header.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
export default function Hero() {
  return (
    <div className="flex items-center mt-8">
      <div className="flex flex-col gap-y-20 w-full lg:w-1/2">
        <div className="left flex flex-col gap-y-10 items-start">
          <button className="bg-sky-100 text-blue-600 py-2 px-5 rounded text-bold">
            Sale 70%
          </button>
          <h1 className="font-bold text-7xl font-sans">
            An Industrial Take on Streetwear
          </h1>
          <p className="font-sans opacity-80 text-lg">
            Anyone can beat you but no one can beat your <br /> outfit as long
            as you wear Dine outfits
          </p>
          <button className="bg-black text-white px-6 py-4 flex font-bold">
            <ShoppingCart className="mr-4" />
            Start Shopping
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-8 justify-between">
          <Image src={Feature1} alt="Feature1" />
          <Image src={Feature2} alt="Feature2" />
          <Image src={Feature3} alt="Feature3" />
          <Image src={Feature4} alt="Feature4" />
        </div>
      </div>
      <div className="right w-1/2 lg:flex justify-center hidden bg-[#F5EAEA] rounded-full">
        <Image src={Header} alt="Header" />
      </div>
    </div>
  );
}
