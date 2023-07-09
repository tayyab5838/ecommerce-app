"use client";
import Link from "next/link";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const items = useSelector((state: any) => state.cart.items);
  console.log(items);
  return (
    <div>
      {/* shoping cart */}
      <Link href={"/components/cart"}>
        <div className="p-1.5 rounded-full bg-[#f1f1f1] cursor-pointer">
          <CgShoppingCart className="relative" />
          <span className="absolute top-3 h-3 w-3 ml-2  font-extralight text-[8px] text-center rounded-full bg-[#f02d34] text-white">
            {items.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ShoppingCart;
