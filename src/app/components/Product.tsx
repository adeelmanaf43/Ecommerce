import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

interface IProduct {
  title: string;
  price: number;
  image: IImage;
}

export default function Product({ title, price, image }: IProduct) {
  return (
    <div className="flex flex-col mr-6 hover:scale-110">
      <Image
        src={urlForImage(image).url()}
        alt="Image"
        height={400}
        width={400}
      />
      <p className="font-bold text-lg">{title}</p>
      <p className="font-bold text-lg">${price}</p>
    </div>
  );
}
