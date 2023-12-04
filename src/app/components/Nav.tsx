"use client";
import { useEffect, useState } from "react";
import NavBar from "./Header";
import { useAuth } from "@clerk/nextjs";
import { flag } from "../product/[product]/ProductPage";
export default function Nav() {
  console.log("Flag value", flag);
  const [count, setCount] = useState(0);
  const { userId } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart_number?user_id=${userId}`)
      .then((res) => res.json())
      .then((val) => {
        setCount(val.res);
      });
  }, [flag]);
  return <NavBar itemCount={count} />;
}
