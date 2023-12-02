"use client";
import { getSingleProduct } from "@/lib/data";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductPage({ data }: any) {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = async () => {
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: data._id,
          product_title: data.title,
          product_price: data.price,
          product_quantity: quantity,
          image_url: urlForImage(data.image).url(),
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 max-w-4xl mx-auto gap-x-10 items-center lg:items-center">
        <Image
          src={urlForImage(data.image).url()}
          alt="Image"
          width={500}
          height={1000}
        />
        <div className="flex flex-col flex-grow gap-y-10 pt-20">
          <div>
            <h3 className="font-semibold text-4xl">{data.title}</h3>
            <h3 className="font-semibold text-4xl text-gray-300">
              {data.typee}
            </h3>
          </div>
          <div>
            <p className="font-bold">Select Size</p>
            <div className="flex gap-x-5">
              <p className="font-bold text-gray-600 hover:bg-blue-700 rounded-full px-3 py-1">
                XS
              </p>
              <p className="font-bold text-gray-600 hover:bg-blue-700 rounded-full px-3 py-1">
                S
              </p>
              <p className="font-bold text-gray-600 hover:bg-blue-700 rounded-full px-3 py-1">
                M
              </p>
              <p className="font-bold text-gray-600 hover:bg-blue-700 rounded-full px-3 py-1">
                L
              </p>
              <p className="font-bold text-gray-600 hover:bg-blue-700 rounded-full px-3 py-1">
                XL
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <p className="font-bold mr-5">Quantity:</p>
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="bg-gray-200 border border-gray-200 px-3 py-1 rounded-full"
            >
              -
            </button>
            <p> {quantity}</p>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-black px-3 py-1 rounded-full border border-black"
            >
              +
            </button>
          </div>
          <div className="flex gap-x-5 items-center">
            <button
              onClick={() => handleAddToCart()}
              className="bg-black text-white px-5 py-2 flex"
            >
              <ShoppingCart className="mr-3" />
              Add to Cart
            </button>
            <h2 className="text-2xl font-bold">${data.price}.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
