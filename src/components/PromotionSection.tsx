import Image from "next/image";
import React from "react";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const PromotionsSection = ({ productData }: any) => {
  const event1 = productData.filter((product: any) => {
    return product._id == "a6f7e4fc-3ddc-4107-b525-e268996fc1d6";
  });
  const event2 = productData.filter((product: any) => {
    return product._id == "8b017722-d7fe-4bcf-96cc-9ae2238020eb";
  });
  const featureData = [event1, event2];
  console.log("feature data ", featureData);
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mt-12 mx-10 md:mx-16">
        {/* Top Content */}
        <div className="text-center">
          <span className="text-blue-700 font font-semibold text-xs font-soraFont">
            PROMOTIONS
          </span>
          <h3 className="font-bold font-soraFont">Our Promotions Events</h3>
        </div>

        <div className="md:flex mt-5">
          {/* Left Side */}
          <div className="md:flex-1">
            {/* Upper div */}
            <div className="flex bg-[#d6d6d8] px-4 items-center justify-between">
              <div className="font-soraFont">
                <h3 className="font-bold font-soraFont">GET UP TO 60%</h3>
                <p className="font-soraFont">For the summer season</p>
              </div>
              <div>
                <Image
                  src={"/promotions/event1.webp"}
                  alt="Event 1 image"
                  height={170}
                  width={150}
                />
              </div>
            </div>
            {/* lower div */}
            <div className="bg-[#212121] items-center text-white text-center py-6 mt-2">
              <h3 className="font-bold font-soraFont text-lg">GET 30% Off</h3>
              <p className="font-soraFont text-xs font-light mt-2">
                USE PROMO CODE
              </p>
              <button className="bg-[#474747] py-0.5 px-4 rounded-sm text-sm font-medium mt-1">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:flex-1 md:flex mt-4 md:mt-0 gap-x-2 space-y-4 md:space-y-0 md:ml-4 md:h-64">
            {/* Left Image div  */}
            <div className="flex-1 w-full px-3 overflow-y-hidden pt-4 bg-[#efe1c7] md:mb-1">
              <div className="text-xs font-soraFont font-normal">
                <p>{event1[0].title}</p>
                <span className="line-through">$100.00</span>
                <span className="font-bold"> ${event1[0].price}</span>
              </div>
              <div className="flex justify-center h-full md:mt-8 ">
                <Link href={`../views/OrderPage/${event1[0]._id}`}>
                  <Image
                    src={urlFor(event1[0].image[0].asset._ref).url()}
                    alt="Event 2 Image"
                    height={150}
                    width={150}
                  />
                </Link>
              </div>
            </div>
            <div className="flex-1 bg-[#d7d7d9] px-3 w-full overflow-y-hidden pt-4 md:mb-1">
              <div className="text-xs font-soraFont font-normal">
                <p>{event2[0].title}</p>
                <span className="line-through">$100.00</span>
                <span className="font-bold"> ${event2[0].price}</span>
              </div>
              <div className="flex justify-center md:mt-8">
                <Link href={`../views/OrderPage/${event2[0]._id}`}>
                  <Image
                    src={urlFor(event2[0].image[0].asset._ref).url()}
                    alt="Event 2 Image"
                    height={150}
                    width={150}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
