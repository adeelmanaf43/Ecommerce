"use client";
import { useEffect, useState } from "react";
import NavBar from "./Header";
import { useAuth } from "@clerk/nextjs";
import FlagContextProvider from "./FlagContext";
export default function Nav() {
  const [count, setCount] = useState(0);
  const { userId } = useAuth();

  return (
    // <FlagContextProvider>
    <NavBar />
    // </FlagContextProvider>
  );
}
