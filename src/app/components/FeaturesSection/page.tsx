import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="mt-20 ">
      <div className="justify-end flex font-soraFont font-extrabold text-2xl align-text-bottom">
        <h2 className="w-80">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className="grid grid-cols-2 mt-6 bg-[#fafcff] gap-x-8 h-72 items-center relative">
        {/* left side content */}
        <div className="grid grid-cols-2 gap-y-6">
          <h2 className="absolute flex  font-semibold font-soraFont text-6xl opacity-10 max-w-xs top-14">
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
        <div>
          <div className="grid grid-cols-2">
            <Image
              src={"/products/feature.webp"}
              alt="Feature Product Image"
              width={160}
              height={160}
            />
            <div className="flex  flex-col items-start justify-center">
              <p className="font-soraFont text-justify text-xs font-extralight">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="bg-black text-white font-soraFont text-[9px] font-normal py-1 px-3 mt-2 ">
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
