export default function Footer() {
  return (
    <div className="my-10">
      <div className="w-full h-[2px] bg-black">
        <hr />
      </div>
      <div className="flex justify-evenly pt-4 flex-wrap">
        <p className="opacity-70">Copyright © 2022 Dine Market</p>
        <p className="opacity-70">
          Design by.{" "}
          <span className="font-bold opacity-100">Weird Design Studio</span>
        </p>
        <p className="opacity-70">
          Code by.{" "}
          <span className="font-bold opacity-100">Adeel Manaf on Github</span>
        </p>
      </div>
    </div>
  );
}
