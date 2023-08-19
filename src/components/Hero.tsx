import Image from "next/image";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mt-8 md:flex mx-10 md:mx-16">
        {/* Left side */}
        <div className="flex-1 mt-6">
          <h4 className="bg-[#e1edff] font-semibold text-blue-700 max-w-fit py-1 px-2 rounded-sm text-xs font-soraFont">
            Sale 70%
          </h4>
          <h1 className="mt-6 font-extrabold text-[#212121] font-soraFont text-4xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="mt-4 text-[#666] font-soraFont text-xs w-64">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <div>
            <button className="mt-4 bg-black py-2 px-3 text-white inline-flex items-center space-x-2 font-soraFont font-medium text-xs">
              <CgShoppingCart />
              <span>Start Shopping</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-4 md:flex md:gap-x-4 mt-14 md:justify-between">
            <Image
              src={"/featured_items/Featured1.webp"}
              alt="featured image 1"
              width={60}
              height={20}
            />
            <Image
              src={"/featured_items/Featured2.webp"}
              alt="featured image 2"
              width={60}
              height={20}
            />
            <Image
              src={"/featured_items/Featured3.webp"}
              alt="featured image 3"
              width={60}
              height={20}
            />
            <Image
              src={"/featured_items/Featured4.webp"}
              alt="featured image 4"
              width={60}
              height={20}
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 relative hidden md:block">
          <div className="mt-4 h-80 w-80 bg-[#fbece2] rounded-full absolute"></div>
          <Image
            className="relative right-4"
            src={"/hero-image.webp"}
            alt="hero image"
            height={420}
            width={420}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
