import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="mt-32  mb-10 mx-10 md:mx-16">
        <div className="flex flex-col md:flex-row">
          {/* left side */}
          <div className="flex flex-col basis-5/12">
            <Image
              src={"/logo.webp"}
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
          <div className="grid my-6 md:grid-cols-3 md:my-0 gap-y-4 md:gap-16">
            <div className="flex flex-col gap-y-2">
              <h4 className="font-soraFont font-semibold text-lg">Company</h4>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                About
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Terms of Use
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Privacy Policy
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                How it Works
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="font-soraFont font-semibold text-lg">Support</h4>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Support Center
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                24h Service
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Quick Chat
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <h4 className="font-soraFont font-semibold text-lg">Contact</h4>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                About
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Whatsapp
              </Link>
              <Link
                className="font-soraFont font-medium text-sm text-[#666]"
                href={"#"}
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
