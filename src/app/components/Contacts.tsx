import Logo from "public/Logo.webp";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Link } from "lucide-react";
export default function Contacts() {
  return (
    <div className="grid gap-y-5 lg:grid-cols-5 lg:gap-x-12">
      <div className="lg:col-span-2 flex flex-col gap-y-6 flex-1">
        <Image src={Logo} alt="Log" />
        <p>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex gap-x-2 items-center">
          <div className=" text-black text-xl bg-gray-200 px-4 py-4">
            <Facebook />
          </div>
          <div className=" text-black text-xl bg-gray-200 px-4 py-4">
            <Twitter />
          </div>
          <div className=" text-black text-xl bg-gray-200 px-4 py-4">
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="font-bold text-xl opacity-80">Company</h2>
        <ul className="flex flex-col gap-y-2">
          <li>About</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="font-bold text-xl opacity-80">Support</h2>
        <ul className="flex flex-col gap-y-2">
          <li>Support</li>
          <li>24h Service</li>
          <li>Quick Chat</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h2 className="font-bold text-xl opacity-80">Contact</h2>
        <ul className="flex flex-col gap-y-2">
          <li>Whatsapp</li>
          <li>Support 24h</li>
        </ul>
      </div>
    </div>
  );
}
