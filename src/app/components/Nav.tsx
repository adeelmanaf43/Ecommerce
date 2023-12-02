import NavBar from "./Header";
import { cookies } from "next/headers";

export default async function Nav() {
  const setCookies = cookies();
  const user_id = setCookies.get("user_id")?.value as string;
  const res2 = await fetch(
    `http://localhost:3000/api/cart_number?user_id=${user_id}`
  );
  const itemCount = await res2.json();
  return <NavBar itemCount={itemCount.res} />;
}
