import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="flex">
        {/* left side */}
        <div className="flex flex-col basis-5/12">
          <Image
            src={"/Logo.webp"}
            alt="Footer Image"
            width={100}
            height={100}
          />
          <p className="text-[10px] w-60 mt-4 font-soraFont font-light">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-x-3 mt-3">
            <a href="#">
              <div className="h-6 w-6 bg-[#f1f1f1] rounded-md items-center justify-center flex">
                <TiSocialTwitter />
              </div>
            </a>
            <a href="#">
              <div className="h-6 w-6 bg-[#f1f1f1] rounded-md items-center justify-center flex">
                <TiSocialFacebook />
              </div>
            </a>
            <a href="#">
              <div className="h-6 w-6 bg-[#f1f1f1] rounded-md items-center justify-center flex">
                <TiSocialLinkedin />
              </div>
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-soraFont font-medium text-sm">Company</h4>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              About
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Terms of Use
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Privacy Policy
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              How it Works
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="font-soraFont font-medium text-sm">Support</h4>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Support Center
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              24h Service
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Quick Chat
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="font-soraFont font-medium text-sm">Contact</h4>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              About
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Whatsapp
            </Link>
            <Link className="font-soraFont font-light text-[10px]" href={"#"}>
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
