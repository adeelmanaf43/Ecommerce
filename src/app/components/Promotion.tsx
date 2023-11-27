import Image from "next/image";
import Event1 from "/public/event1.webp";
import Event2 from "/public/event2.webp";
import Event3 from "/public/event3.webp";
export default function Promotion() {
  return (
    <div className="gap-y-3  grid grid-rows-[repeat(6,aut)] grid-cols-1 sm:grid-rows-[repeat(5,auto)] sm:grid-cols-2 lg:grid-rows-[auto,auto,1fr,1fr] lg:grid-cols-[1fr,auto,auto] mt-20 lg:gap-x-6 lg:gap-y-6 sm:gap-x-3 sm:gap-y-3">
      <p className="row-start-1 sm:col-span-2 lg:col-span-3 text-center text-blue-700 text-sm font-bold">
        PROMOTIONS
      </p>
      <h2 className="row-start-2 sm:col-span-2 lg:col-span-3 text-3xl font-bold font-sans text-center">
        Our Promotions Events
      </h2>
      <div className="bg-gray-400 row-start-3 flex px-10 sm:col-span-2 lg:col-auto">
        <div className="w-1/2 flex items-center flex-col justify-center">
          <h2 className="font-bold text-2xl">GET UP TO 60%</h2>
          <p>For the Summer Season</p>
        </div>
        <Image className="w-1/2 object-cover" src={Event1} alt="Event1" />
      </div>
      <div className="row-start-4 sm:col-span-2 lg:col-auto flex flex-col bg-black text-white justify-center items-center py-2  sm:py-12 lg:py-0">
        <h2 className="font-extrabold text-2xl">GET 30% Off</h2>
        <p className="text-lg mt-8">USE PROMO CODE</p>
        <p className="bg-gray-500 py-1 px-8">DINEWEEKANDSALE</p>
      </div>
      <div className="lg:col-start-2  lg:row-start-3 lg:row-end-5 sm:col-start-1 sm:row-start-5 bg-[#F8D7D7] px-2 py-3">
        <p>Flex Sweatshirt</p>
        <p>
          <span className="line-through"> $100.00</span> <strong>$75.00</strong>
          {""}
        </p>
        <Image className="mx-auto" src={Event2} alt="Event2" />
      </div>
      <div className="lg:col-start-3 lg:row-start-3 lg:row-end-5 sm:col-start-2 sm:row-start-5 bg-gray-300 px-2 py-3">
        <p>Flex Push Button Bomber</p>
        <p className="text-">
          <span className="line-through">$225.00</span> <strong>$190.00</strong>
          {""}
        </p>
        <Image className="mx-auto" src={Event3} alt="Event2" />
      </div>
    </div>
  );
}
