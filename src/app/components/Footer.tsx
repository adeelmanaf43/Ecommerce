export default function Footer() {
  return (
    <div className="my-10 flex flex-col gap-y-6">
      <hr className="w-full h-[2px] bg-black" />
      <div className="flex justify-evenly pt-4 flex-wrap">
        <p className="opacity-70">Copyright © 2022 Dine Market</p>
        <p className="opacity-70">
          Design by. <strong>Weird Design Studio</strong>
        </p>
        <p className="opacity-70">
          Code by.
          <strong className="font-bold opacity-100">
            Adeel Manaf on Github
          </strong>
        </p>
      </div>
    </div>
  );
}
