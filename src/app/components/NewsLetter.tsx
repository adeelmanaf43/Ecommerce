export default function NewsLetter() {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-y-5 mb-32 items-center sm:items-start">
      <h1 className="font-bold text-3xl font-sans">
        Subscribe to Our NewsLetter
      </h1>
      <p>Get the latest information and promo offers directly</p>
      <div className="flex gap-y-4 sm:gap-y-0 flex-col items-center sm:flex-row sm:items-start gap-x-5 border w-full">
        <input
          className="border border-black px-2 py-2 flex-grow"
          placeholder="Input email address"
          type="text"
        />
        <button className="bg-black text-white px-4 py-2 font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}
