import React from "react";
import { getProductData } from "@/app/page";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Header from "../../Header/page";
import Footer from "../../Footer/page";

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
    <div className="mx-16">
      <Header />
      <div className="grid grid-cols-4 gap-y-6 gap-x-4 mt-10">
        {result.map((item: any) => {
          return (
            <>
              <div className="mt-4">
                <Link href={`/components/OrderPage/${item._id}`}>
                  <div className="h-40 overflow-hidden">
                    <Image
                      src={urlFor(item.image[0].asset._ref).url()}
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
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default page;