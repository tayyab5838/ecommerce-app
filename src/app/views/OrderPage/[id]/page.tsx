"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../../../components/Header";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../../sanity/lib/client";
import { getProductData } from "@/app/page";
import Footer from "../../../../components/Footer";
import CopyRight from "../../../../components/CopyRightSction";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

interface CartItem {
  // Define the structure of a cart item
  // Example properties, modify as per your needs

  name: string;
  price: number;
  _id: any;
  quantity: number;
  image: any;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const OrderPage = ({ params }: { params: { id: string } }) => {
  const [number, setNumber] = useState(1);
  const [filterProduct, setFilterProduct] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData();

      const filterData = data.find((item: any) => item._id === params.id);
      setFilterProduct(filterData);

      if (filterData) {
        const url = filterData.image[0].asset._ref;
        setImageUrl(url);
        setSelectedImage(filterData.image[0]._key); // Set the initial selected image
      }
    };

    fetchData();
  }, [params.id]);

  const addToCart = (productData: any) => {
    const cartItem: CartItem = {
      name: productData.title,
      price: productData.price,
      _id: productData._id,
      quantity: number,
      image: productData.image,
      totalPrice: number,
    };
    dispatch(addItem(cartItem));
    toast.success("Product added successfully");
  };

  return (
    <>
      <Header />
      <div className="px-8 md:px-16  pb-4 bg-[#fcfcfc]">
        <div className="flex flex-col md:flex-row py-4">
          <div className="flex gap-x-4">
            {/* side small images */}
            <div className="space-y-4 mr-3 h-fit">
              {filterProduct?.image.map((item: any) => (
                <div
                  key={item._id}
                  onMouseEnter={() => setSelectedImage(item._key)}
                  className="h-14 sm:w-20 sm:h-20 w-14"
                >
                  <Image
                    className="w-full h-full"
                    key={item._id}
                    src={urlFor(item.asset._ref).url()}
                    alt="small image"
                    height={70}
                    width={65}
                  />
                </div>
              ))}
            </div>
            {/* center image */}
            <div className="flex flex-col flex-1">
              {filterProduct?.image.map((subItem: any, i: any) => {
                if (subItem._key == selectedImage) {
                  return (
                    <div key={i}>
                      <Image
                        src={urlFor(subItem.asset._ref).url()}
                        alt="Image 1"
                        height={450}
                        width={350}
                        className="w-60 sm:w-64 md:w-80 h-64 sm:h-64 md:h-80 shrink-0"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* product detail */}
          <div className=" my-4 sm:my-0 mr-20 mt-10 md:mt-0 sm:flex sm:flex-col md:ml-4 sm:flex-1 items-start sm:justify-center sm:items-center">
            {filterProduct && (
              <div>
                <h3 className="font-soraFont font-semibold text-base">
                  {filterProduct.title}
                </h3>
                <p className="font-soraFont text-sm font-medium text-[#b0b0b0]">
                  Dress
                </p>
                <div className="mt-6 ">
                  <h6 className="font-soraFont font-medium text-sm">
                    SELECT SIZE
                  </h6>
                  <div className="space-x-4 font-normal text-xs mt-2 text-[#666666]">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                  </div>
                </div>
                <div className="mt-3 flex gap-x-3 items-center">
                  <p className="font-soraFont font-medium text-sm">Quantity</p>
                  <button
                    onClick={() => number > 1 && setNumber(number - 1)}
                    className="bg-[#d6d6d8] rounded-full h-4 w-4 justify-center items-center m-2"
                  >
                    <HiOutlineMinusSm />
                  </button>
                  <p>{number}</p>
                  <button
                    onClick={() => setNumber(number + 1)}
                    className="bg-[#d6d6d8] rounded-full h-4 w-4 justify-center items-center m-2"
                  >
                    <HiOutlinePlusSm />
                  </button>
                </div>
                <div className="flex items-center mt-3 shrink-0">
                  <button
                    onClick={() => addToCart(filterProduct)}
                    className="bg-black shrink-0 py-1 px-2 text-white font-soraFont text-sm font-normal mr-2 flex items-center gap-x-2"
                  >
                    <CgShoppingCart />
                    Add to Cart
                  </button>
                  <p className="font-soraFont font-medium text-sm">
                    ${filterProduct.price}.00
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="mt-20 py-20 px-8 bg-white">
          <div className="flex items-center">
            <h5 className="absolute font-soraFont text-5xl md:text-7xl sm:text-5xl text-[#757774] opacity-5 font-bold ">
              Overview
            </h5>
            <h4 className="font-soraFont font-semibold text-normal">
              Product Information
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row mt-12 border-t-2 brodet-t-[#c4c4c4] pt-4">
            <h4 className="font-soraFont text-xs text-[#666666] font-semibold flex-1">
              PRODUCT DETAILS
            </h4>
            <p className="flex-[2_2_0%] mt-2 sm:mt-0 text-justify text-[#212121] text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-4">
            <div className="font-soraFont text-xs text-[#666666] font-semibold flex-1">
              PRODUCT CARE
            </div>
            <ul className="flex-[2_2_0%] mt-2 sm:mt-0 list-disc pl-4">
              <li className="font-soraFont font-normal text-xs text-[#222145]">
                Lorem ipsum dolor sit amet
              </li>
              <li className="font-soraFont font-normal text-xs text-[#222145]">
                consectetur adipiscing elit
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
};

export default OrderPage;
