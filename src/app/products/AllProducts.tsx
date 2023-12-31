import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

interface IProduct {
  title: string;
  typee: string;
  price: number;
  image: IImage;
  slug: any;
}

export default function AllProduct({
  title,
  typee,
  price,
  image,
  slug,
}: IProduct) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <Link href={`/product/${slug.current}`}>
        <Image
          className="max-h-[400px] max-w-[400px]"
          src={urlForImage(image).url()}
          alt="Image"
          height={250}
          width={250}
        />
        <p className="font-bold text-lg text-start">{title}</p>
        <p className="font-bold text-lg text-start opacity-70">{typee}</p>
        <p className="font-bold text-lg text-start">${price}</p>
      </Link>
    </div>
  );
}
