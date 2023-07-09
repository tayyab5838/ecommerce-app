import React from "react";

const NewsLetter = () => {
  return (
    <section className="">
      <div className="mt-20 text-center mb-16 relative">
        <p className="absolute top-2 left-48 font-bold text-7xl font-soraFont opacity-10 flex">
          Newsletter
        </p>
        <h2 className="font-soraFont font-semibold text-xl">
          Subscribe Our Newsletter
        </h2>
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
