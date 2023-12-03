"use client";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { ShoppingCart, AlignRight, X } from "lucide-react";
export default async function NavBar({ itemCount }: any) {
  const [showNav, setShowNav] = useState(false);
  const [itemCOunt, setItemCount] = useState(0);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" className="w-40" />
        </Link>
        <button
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="flex lg:hidden"
        >
          {showNav ? <X /> : <AlignRight />}
        </button>
        <ul className="lg:flex hidden gap-x-10">
          <li className="text-lg">
            <Link href={"/female"}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/male"}>Male</Link>
          </li>
          <li className="text-lg">
            <Link href={"/kids"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href={"/products"}>All Products</Link>
          </li>
        </ul>
        <input
          placeholder="What you are looking"
          className="border rounded-lg w-[30%] px-2 text-sm py-1 hidden lg:block"
          type="text"
        />
        <UserButton afterSignOutUrl="/" />
        <Link
          href={"/cart"}
          className="h-10 w-10 rounded-full bg-gray-300 lg:flex justify-center items-center hidden"
        >
          <ShoppingCart className="h-6 w-6" />
          <p className="absolute text-white bg-red-500 px-1 text-xs rounded-full ml-3 mb-6">
            {itemCount}
          </p>
        </Link>
      </div>
      {showNav && <MobileNav />}
    </div>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-y-2 lg:hidden">
      <div className="flex h-12 w-12 bg-gray-300 rounded-full items-center justify-center">
        <ShoppingCart className="h-6 w-6" />
      </div>
      <Link href={"/female"}>Female</Link>
      <Link href={"/male"}>Male</Link>
      <Link href={"/kids"}>Kids</Link>
      <Link href={"/products"}>All Product</Link>
    </div>
  );
}
