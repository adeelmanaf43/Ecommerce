"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "/public/Logo.webp";
import Link from "next/link";
import { ShoppingCart, AlignRight, X } from "lucide-react";
export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="logo" className="w-40" />
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
            <Link href={"/"}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/"}>Male</Link>
          </li>
          <li className="text-lg">
            <Link href={"/"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href={"/"}>React</Link>
          </li>
        </ul>
        <input
          placeholder="What you are looking"
          className="border rounded-lg w-[30%] px-2 text-sm py-1 hidden lg:block"
          type="text"
        />
        <div className="h-10 w-10 rounded-full bg-gray-300 lg:flex justify-center items-center hidden">
          <ShoppingCart className="h-6 w-6" />
        </div>
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
      <Link href={"/"}>Female</Link>
      <Link href={"/"}>Male</Link>
      <Link href={"/"}>Kids</Link>
      <Link href={"/"}>React</Link>
    </div>
  );
}
