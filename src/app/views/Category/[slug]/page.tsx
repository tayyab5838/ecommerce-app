import React from "react";
import { getProductData } from "@/app/page";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const getProductByCategory = async (category: any) => {
  const allData = await getProductData();
  const filterData = await allData.filter(
    (item: any) => item.category.category == category
  );
  return filterData;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const result = await getProductByCategory(params.slug);
  return (
    <>
      <Header />
      <div className="mx-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-x-4 mt-10">
          {result.map((item: any) => {
            return (
              <div
                key={item._id}
                className="mt-4 flex justify-center items-center"
              >
                <Link href={`../views/OrderPage/${item._id}`}>
                  <div className="overflow-hidden h-72 w-64 sm:h-48 sm:w-44">
                    <Image
                      src={urlFor(item.image[0].asset._ref).url()}
                      className="w-full h-full"
                      alt="Product image 2"
                      width={150}
                      height={160}
                    />
                  </div>
                  <h4 className="font-medium text-[10px] font-soraFont mt-4">
                    {item.title}
                  </h4>
                  <h4 className="font-semibold text-[8px] font-soraFont mt-1 text-stone-500">
                    {item.description}
                  </h4>
                  <span className="text-xs font-semibold font-soraFont">
                    ${item.price}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
