"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import getStripePromise from "@/lib/stripe";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/store/slice/cartSlice";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const Cart = () => {
  const items = useSelector((state: any) => state.cart.items);
  const totalAmount = useSelector((state: any) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncreseQuantity = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId: any) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckOut = async () => {
    const stripe: any = await getStripePromise();
    const res = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(items),
    });

    const data = await res.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  console.log("cart page:", totalAmount);
  console.log("cart page:", items);
  return (
    <>
      <Header />
      <div className="mx-16">
        <div className="mt-16">
          <h2 className="font-soraFont font-semibold text-sm ">
            Shopping Cart
          </h2>
          {/* main div */}
          {items.length > 0 ? (
            <div className="flex flex-col sm:flex-row mt-3">
              {/* item detail div */}
              <div className="flex justify-between w-full h-fit">
                {/* left side */}
                <div className="flex flex-col w-full sm:w-3/4 justify-between gap-y-2 mb-4">
                  {items.map((item: any, id: any) => {
                    return (
                      <div className="flex flex-col sm:flex-row" key={id}>
                        {/* Image div */}
                        <div>
                          <Image
                            key={id}
                            className="rounded-sm "
                            src={urlFor(item.image[0].asset._ref).url()}
                            alt="Feature Product Image"
                            width={100}
                            height={60}
                          />
                        </div>
                        <div className="flex flex-col w-3/4 justify-between gap-y-2 mb-4 sm:ml-4 mt-3 sm:mt-0">
                          <div className="flex justify-between">
                            <h2 className="font-soraFont font-light text-base">
                              {item.name}
                            </h2>
                            {/* delete icon */}
                            <button
                              onClick={() => handleRemoveItem(item._id)}
                              className="hover:text-red-500"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                          <p className="font-soraFont font-medium text-xs text-zinc-500">
                            Dress
                          </p>
                          <p className="font-soraFont font-medium text-[10px]">
                            Delivery Estimation
                          </p>
                          <p className="font-soraFont font-medium text-[10px] text-[#f3c60c]">
                            5 Working Days
                          </p>
                          <div className="flex justify-between">
                            <h4 className="font-soraFont font-semibold text-xs">
                              ${item.totalPrice}
                            </h4>
                            {/* increase quantity buttons */}
                            <div className="flex justify-center items-center content-center space-x-2">
                              <button
                                onClick={() => handleDecreaseQuantity(item._id)}
                                className="rounded-full border h-6 w-6 "
                              >
                                <HiMinusSm />
                              </button>
                              <p>{item.quantity}</p>
                              <button
                                onClick={() => handleIncreseQuantity(item._id)}
                                className="rounded-full border h-6 w-6"
                              >
                                <HiPlusSm />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Order Summary */}
              <div className="flex flex-col bg-[#fbfcff] p-6 h-fit gap-y-4 sm:ml-4">
                <h4 className="font-soraFont text-sm font-semibold">
                  Order Summary
                </h4>
                <div className="flex justify-between">
                  <p className="font-soraFont font-light text-xs">Quantity</p>
                  <p className="font-soraFont font-light text-xs">
                    {items.length} Products
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-soraFont font-light text-xs">Sub Total</p>
                  <p className="font-soraFont font-light text-xs">
                    ${totalAmount}
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleCheckOut}
                    className=" bg-black text-white whitespace-nowrap px-4 py-1 text-[10px] font-soraFont font-medium"
                  >
                    Process to Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8">
              <h2 className="font-soraFont font-bold text-sm sm:text-lg">
                <div className="flex items-center justify-center mb-3">
                  <BiShoppingBag size={"4em"} />
                </div>
                Your shopping bag is empty
              </h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
