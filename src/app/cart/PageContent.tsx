"use client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ShoppingBag, Trash2 } from "lucide-react";

export default function PageContent() {
  const { userId, isSignedIn } = useAuth();
  const [state, setState] = useState(false);
  const [products, setProducts] = useState<any>(null);

  const handleQuantityChange = (product_title: string, newQuantity: number) => {
    const updatedProducts = products.map((item: any) => {
      if (item.product_title === product_title) {
        return { ...item, product_quantity: newQuantity };
      } else {
        return item;
      }
    });
    setProducts(updatedProducts);
  };

  const handleUpdate = async (
    product_title: string,
    product_price: number,
    product_quantity: number,
    total_price: number
  ) => {
    try {
      await fetch("/api/cart", {
        method: "PUT",
        body: JSON.stringify({
          user_id: userId,
          product_title: product_title,
          product_price: product_price,
          product_quantity: product_quantity,
          total_price: total_price,
        }),
      });
      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (product_title: string) => {
    try {
      await fetch("/api/cart", {
        method: "DELETE",
        body: JSON.stringify({ user_id: userId, product_title: product_title }),
      });
      setState(!state);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.res));
  }, [isSignedIn, state]);
  return (
    <div>
      {isSignedIn ? (
        <div className="my-20">
          {products && products.length !== 0 ? (
            <div className="flex flex-col gap-y-6">
              <h2 className="font-bold text-2xl">Shopping Cart</h2>
              {products.map((item: any) => (
                <div className="flex gap-x-10 max-w-2xl">
                  <Image
                    className="max-h-[200px] max-w-[200px] object-cover"
                    src={urlForImage(item.image_url).url()}
                    alt="Image"
                    height={200}
                    width={200}
                  />
                  <div className="flex flex-col gap-y-3">
                    <h2 className=" text-2xl">{item.product_title}</h2>
                    <h2 className="text-2xl">{item.total_price}</h2>
                    <div className="flex gap-x-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product_title,
                            item.product_quantity - 1
                          )
                        }
                      >
                        -
                      </button>
                      <h2 className="text-2xl">{item.product_quantity}</h2>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.product_title,
                            item.product_quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        handleUpdate(
                          item.product_title,
                          item.product_price,
                          item.product_quantity,
                          item.total_price
                        )
                      }
                      className="bg-black text-white px-5 py-2"
                    >
                      Update
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(item.product_title)}
                    className="ml-auto"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <EmptyCard />
          )}
        </div>
      ) : (
        <SignInSection />
      )}
    </div>
  );
}

function SignInSection() {
  return (
    <div className="flex flex-col max-w-lg mx-auto my-20 gap-y-8 items-center">
      <h2 className="font-bold text-2xl tet-center">Please Login First</h2>
      <SignInButton mode="modal">
        <button className="bg-black text-white px-5 py-2">Sign In</button>
      </SignInButton>
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="mt-32 mb-32">
      <h3 className="font-bold text-2xl font-sans">Shopping Cart</h3>
      <div className="max-w-xl mx-auto flex flex-col items-center mt-8">
        <ShoppingBag className="h-20 w-20" />
        <h2 className="font-bold text-3xl">Your shopping bag is empty</h2>
      </div>
    </div>
  );
}
