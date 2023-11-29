import Image from "next/image";
import SectionImage from "/public/Section.webp";
export default function Section() {
  return (
    <div className="grid grid-rows-[repeat(3,auto)] gap-y-8 xl:grid-rows-[auto,auto] xl:grid-cols-2 xl:gap-x-10 mb-40">
      <h2 className="col-span-2 font-bold text-5xl font-sans xl:col-start-2">
        Unique and Authentic Vintage Designer Jewellery
      </h2>
      <div className="row-start-2 xl:col-start-1">
        <div className="grid gap-y-3 grid-rows-[auto,auto] grid-cols-2 xl:gap-x-5 xl:gap-y-5 xl:mt-10">
          <div className="row-start-1 col-start-1">
            <p className="font-bold text-lg">Using Good quality materials</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row-start-1 col-start-2">
            <p className="font-bold text-lg">100% Handmade Products</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row-start-2 col-start-1">
            <p className="font-bold text-lg">Modern Fashion Design</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row-start-2 col-start-2">
            <p className="font-bold text-lg">Discount for Bulk Orders</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="row-start-3 xl:row-start-2 xl:col-start-2">
        <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 items-center xl:gap-x-10 xl:flex-grow">
          {/* <div className=""> */}
          <Image
            className="mx-auto max-h-[350px] max-w-[300px] sm:mx-0 xl:max-h-[320px]"
            src={SectionImage}
            alt="Section"
          />
          <div className="xl:flex-grow">
            <p className="text-lg">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="bg-black text-white px-16 py-2 mt-4 sm:px-4">
              See All Product
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
