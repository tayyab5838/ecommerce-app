import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto">
      <div className="justify-end flex font-soraFont font-extrabold text-2xl align-text-bottom bg-[#fbfcff]">
        <h2 className="w-80">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>

      <div className="flex flex-col md:flex-row py-4 gap-x-8 bg-[#fbfcff]">
        {/* left side content */}
        <div className="grid grid-cols-2 gap-6 mx-16 relative justify-center items-center md:flex-1 md:mx-8">
          <h2 className="absolute flex font-bold leading-relaxed font-soraFont text-5xl md:text-6xl opacity-10 max-w-xs top-4">
            Different from others
          </h2>
          <div>
            <h3 className="font-soraFont text-sm font-semibold">
              Using Good Quality Materials
            </h3>
            <p className="font-soraFont text-xs font-normal mt-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-soraFont text-sm font-semibold">
              100% Handmade Products
            </h3>
            <p className="font-soraFont text-xs font-normal mt-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-soraFont text-sm font-semibold">
              Modern Fashion Design
            </h3>
            <p className="font-soraFont text-xs font-normal mt-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit
            </p>
          </div>
          <div>
            <h3 className="font-soraFont text-sm font-semibold">
              Discount for Bulk Orders
            </h3>
            <p className="font-soraFont text-xs font-normal mt-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit
            </p>
          </div>
        </div>
        {/* Right Side Div */}
        <div className="flex mt-16 md:mt-0 mx-16 md:flex-1 md:mx-8">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="shrink-0 md:flex-1">
              <Image
                src={"/products/feature.webp"}
                alt="Feature Product Image"
                width={80}
                height={80}
                className="w-80 h-80 md:w-60 md:h-60"
              />
            </div>
            <div className="flex flex-col items-center md:items-start  mt-8 sm:mt-0 ml-4 md:mt-0 md:flex-1">
              <p className="font-soraFont text-justify text-sm  font-normal">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="bg-black text-white font-soraFont text-sm font-medium py-2 px-3 mt-2">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
