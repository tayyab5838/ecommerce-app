"use client";
import Link from "next/link";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const items = useSelector((state: any) => state.cart.items);
  console.log(items);
  return (
    <div className="pl-9">
      {/* shoping cart */}
      <Link href={"../../views/cart"}>
        <div className="p-3 rounded-full bg-[#f1f1f1] w-fit cursor-pointer">
          <CgShoppingCart className="relative" />
          <span className="absolute top-9 md:top-9 h-4 w-4 ml-2 flex items-center justify-center font-extralight text-[8px] text-center rounded-full bg-[#f02d34] text-white">
            {items.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ShoppingCart;
