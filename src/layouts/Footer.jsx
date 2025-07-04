import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
function Footer() {
  return (
    <div className="bg-[#141414] px-50">
      <div className="flex text-white justify-between w-full py-15">
        <div className="first-col">
          <p className="font-semibold mb-5">Home</p>
          <ul className="list-none text-[#666666] space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="second-col">
          <p className="font-semibold mb-5">Home</p>
          <ul className="list-none text-[#666666] space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="third-col">
          <p className="font-semibold mb-5">Home</p>
          <ul className="list-none text-[#666666] space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="podcasts">
          <p className="font-semibold mb-5">Home</p>
          <ul className="list-none text-[#666666] space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-700" />

      <div className="info text-start text-[#666666] py-5 flex justify-between">
        <div className="terms-policies gap-4 flex">
          <p className="terms">Terms & Conditions</p>
          <p className="privacy">Privay Policy</p>
        </div>
        <div className="socials gap-4 flex">
          <Linkedin fill="white" />
          <Github fill="white" />
          <Instagram fill="white" />
        </div>
        <div className="date">© 2025 FutureTech. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
