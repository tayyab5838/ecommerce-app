"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { getProductData } from "@/app/page";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const Products = () => {
  const [allData, setAllData] = useState([]);
  const isDraggingRef = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData();
      setAllData(data);
    };

    fetchData();
  }, []);

  const handleSlideClick = (itemId: string) => {
    if (!isDraggingRef.current) {
      // Navigate to the product page based on the itemId
      window.location.href = `../views/OrderPage/${itemId}`;
    }
  };

  const handleBeforeChange = () => {
    isDraggingRef.current = true;
  };

  const handleAfterChange = () => {
    isDraggingRef.current = false;
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 640, // Small screen breakpoint
        settings: {
          slidesToShow: 1, // Show only 1 slide on small screens
        },
      },
      {
        breakpoint: 1000, // Small screen breakpoint
        settings: {
          slidesToShow: 2, // Show only 2 slide on large screens
        },
      },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto">
      <div className="mt-16 mx-16">
        <header>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </header>

        <div className="text-center">
          <span className="text-blue-700 font font-semibold text-xs font-soraFont">
            PRODUCTS
          </span>
          <h3 className="font-bold font-soraFont">Check What We Have</h3>
        </div>
        {/* products container */}
        <div>
          <Slider className="mt-6" {...settings}>
            {allData.map((item: any) => (
              <div
                key={item._id}
                className="flex justify-center shrink-0 m-auto p-2 relative cursor-pointer transition-transform hover:scale-100 ease-in duration-300 focus:outline-none"
                onClick={() => handleSlideClick(item._id)}
              >
                <Image
                  className="content-center"
                  src={urlFor(item.image[0].asset._ref).url()}
                  alt="Product image 1"
                  width={250}
                  height={200}
                />
                <h4 className="text-xs font-semibold font-soraFont mt-2">
                  {item.title}
                </h4>
                <span className="text-xs font-semibold font-soraFont">
                  ${item.price}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
