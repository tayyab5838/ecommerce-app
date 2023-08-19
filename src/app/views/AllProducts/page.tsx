import Image from "next/image";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getProductData } from "@/app/page";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const AllProducts = async () => {
  const allData = await getProductData();
  return (
    <>
      <Header />
      <div className="mx-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-x-4 mt-10">
          {allData.map((item: any) => {
            return (
              <>
                <div
                  key={item.id}
                  className="mt-4 flex justify-center items-center"
                >
                  <Link href={`../views/OrderPage/${item._id}`}>
                    <div className="overflow-hidden h-72 w-64 sm:h-48 sm:w-44">
                      <Image
                        className="w-full h-full"
                        src={urlFor(item.image[0].asset._ref).url()}
                        alt="Product image 2"
                        width={150}
                        height={160}
                      />
                    </div>
                    <h4 className="font-medium text-sm sm:text-xs font-soraFont mt-2">
                      {item.title}
                    </h4>
                    <h4 className="font-semibold text-sm font-soraFont mt-2 text-stone-500">
                      {item.description}
                    </h4>
                    <h4 className="text-xs font-semibold font-soraFont mt-3">
                      ${item.price}
                    </h4>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
