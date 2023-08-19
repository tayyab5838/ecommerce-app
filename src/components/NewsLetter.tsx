import React from "react";

const NewsLetter = () => {
  return (
    <section className="mx-16  md:mt-10">
      <div className="flex flex-col mt-20 text-center mb-16 relative">
        <h2 className="font-soraFont font-semibold text-xl">
          Subscribe Our Newsletter
        </h2>
        <p className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-2 text-center font-bold text-5xl md:text-7xl font-soraFont opacity-10">
          Newsletter
        </p>
        <p className="font-soraFont font-light text-[10px] mt-3">
          Get the latest information and promo offers directly
        </p>
        <div className="mt-4">
          <input
            className="border p-2 text-[10px]  border-black  h-5 w-44  placeholder:text-[10px]  placeholder:font-soraFont"
            type="email"
            placeholder="Enter email address"
          />
          <button className="bg-black ml-2 cursor-pointer text-white text-[10px] font-semibold py-[3px] px-2">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
