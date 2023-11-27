import Image from "next/image";
import SectionImage from "/public/Section.webp";
export default function Section() {
  return (
    <div className="grid grid-cols-[auto,auto] grid-rows-[repeat(6,auto)] sm:grid-rows-[repeat(5,auto)] mt-12 gap-x-4 gap-y-8 mb-8 sm:items-center lg:grid-cols-[repeat(4,auto)] lg:grid-rows-[repeat(3,auto)]">
      <h1 className="col-span-2 font-bold text-5xl lg:col-start-3 lg:col-span-2 lg:ml-20">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="row-start-2 col-start-1">
        <p className="font-bold text-lg">Using Good Quality Materials</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="row-start-2 col-start-2">
        <p className="font-bold text-lg">100% Handmade Products</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="row-start-3 col-start-1">
        <p className="font-bold text-lg">Modern Fashion Design</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="row-start-3 col-start-2">
        <p className="font-bold text-lg">Discount for Bulk Orders</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p>
      </div>
      <div className="row-start-4 row-span-2 col-start-1 col-span-2 sm:col-auto lg:row-start-2 lg:row-span-2 lg:col-start-3">
        <Image
          className="mx-auto sm:mx-0"
          src={SectionImage}
          alt="Section Image"
        />
      </div>
      <p className="row-start-5 col-span-2 sm:row-start-4 col-start-2 lg:row-start-2 lg:col-start-4">
        This piece is ethically crafted in our small family-owned workshop in
        Peru with unmatched attention to detail and care. The Natural color is
        the actual natural color of the fiber, undyed and 100% traceable.
      </p>
      <button className="bg-black text-white py-2 px-6 font-bold row-start-6 sm:row-start-5 col-start-2 sm:px-2 lg:row-start-3 lg:col-start-4">
        See All Product
      </button>
    </div>
  );
}
