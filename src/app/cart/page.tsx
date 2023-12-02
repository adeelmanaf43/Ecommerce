import { cookies } from "next/headers";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
export default async function Page() {
  const setCookies = cookies();
  const user_id = setCookies.get("user_id")?.value as string;
  const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
  const data = await res.json();
  console.log("Data", data);
  return (
    <div>
      {data.res.map((item: any) => (
        <div>
          <Image
            className="max-h-[500px] max-w-[500px]"
            src={urlForImage(item.image_url).url()}
            alt="Image"
            height={500}
            width={500}
          />
          <h2 className="font-bold text-2xl">{item.product_title}</h2>
          <h2 className="font-bold text-2xl">{item.product_price}</h2>
          <h2 className="font-bold text-2xl">{item.product_quantity}</h2>
        </div>
      ))}
    </div>
  );
}
