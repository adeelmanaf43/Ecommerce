import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

interface IProduct {
  title: string;
  price: number;
  image: IImage;
  typee: string | undefined;
}

export default function Product({ title, price, image, typee }: IProduct) {
  const formattedTitle = title.replace(/\s+/g, "-");
  return (
    <Link href={`/products/${formattedTitle}`}>
      <div className="flex flex-col items-center lg:items-start">
        <Image
          className="max-h-[400px] max-w-[400px]"
          src={urlForImage(image).url()}
          alt="Image"
          height={400}
          width={400}
        />
        <p className="font-bold text-lg text-start">{title}</p>
        {typee && (
          <p className="font-bold text-lg text-start opacity-60">{typee}</p>
        )}
        <p className="font-bold text-lg text-start">${price}</p>
      </div>
    </Link>
  );
}
