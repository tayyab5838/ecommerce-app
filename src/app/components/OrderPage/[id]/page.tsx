"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../Header/page";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../../sanity/lib/client";
import { getProductData } from "@/app/page";
import Footer from "../../Footer/page";
import CopyRight from "../../CopyRightSection/page";
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
      <div className="mx-16">
        <div>
          <Header />
        </div>
        <div className="flex justify-between bg-[#fcfcfc]">
          <div className="space-y-4 ">
            {filterProduct?.image.map((item: any, index: number) => (
              <div onMouseEnter={() => setSelectedImage(item._key)}>
                <Image
                  key={index}
                  src={urlFor(item.asset._ref).url()}
                  alt={item.title}
                  height={70}
                  width={65}
                />
              </div>
            ))}
          </div>
          <div>
            {filterProduct?.image.map((subItem: any, i: any) => {
              if (subItem._key == selectedImage) {
                return (
                  <div key={i}>
                    <Image
                      src={urlFor(subItem.asset._ref).url()}
                      alt="Image 1"
                      height={450}
                      width={350}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="self-center mr-20">
            {filterProduct && (
              <>
                <h3 className="font-soraFont font-semibold text-sm">
                  {filterProduct.title}
                </h3>
                <p className="font-soraFont text-sm font-medium text-[#b0b0b0]">
                  Dress
                </p>
                <div className="mt-6 ">
                  <h6 className="font-soraFont font-medium text-xs">
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
                <div className="flex items-center mt-3">
                  <button
                    onClick={() => addToCart(filterProduct)}
                    className="bg-black py-1 px-2 text-white font-soraFont text-xs font-normal mr-2 flex items-center gap-x-2"
                  >
                    <CgShoppingCart />
                    Add to Cart
                  </button>
                  <p className="font-soraFont font-medium text-sm">
                    ${filterProduct.price}.00
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Product Information */}
        <div className="mt-20">
          <div className="flex items-center">
            <h5 className="absolute font-soraFont text-7xl text-[#757774] opacity-5 font-bold ">
              Overview
            </h5>
            <h4 className="font-soraFont font-semibold text-sm">
              Product Information
            </h4>
          </div>
          <div className="flex mt-12 border-t-2 brodet-t-[#c4c4c4] pt-4">
            <h4 className="font-soraFont text-xs text-[#666666] font-semibold flex-1">
              PRODUCT DETAILS
            </h4>
            <p className="flex-[2_2_0%] text-justify text-[#212121] text-xs font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex mt-4">
            <div className="font-soraFont text-xs text-[#666666] font-semibold flex-1">
              PRODUCT CARE
            </div>
            <ul className="flex-[2_2_0%] list-disc pl-4">
              <li className="font-soraFont font-normal text-xs text-[#222145]">
                Lorem ipsum dolor sit amet
              </li>
              <li className="font-soraFont font-normal text-xs text-[#222145]">
                consectetur adipiscing elit
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
      <CopyRight />
    </>
  );
};

export default OrderPage;
