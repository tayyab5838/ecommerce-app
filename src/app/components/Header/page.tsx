import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import ShoppingCart from "../ShoppingCart.tsx/page";

const Header = () => {
  return (
    <div>
      <header className="my-4">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <a href="/">
            <Image src={"/logo.webp"} alt="Logo Image" height={25} width={80} />
          </a>
          {/* Manue pages */}
          <ul className="flex items-center justify-between gap-x-6 font-soraFont text-xs font-medium">
            <li>
              <Link href={"/components/Category/Male"}>Male</Link>
            </li>
            <li>
              <Link href={"/components/Category/Female"}>Female</Link>
            </li>
            <li>
              <Link href={"/components/Category/Kids"}>Kids</Link>
            </li>
            <li>
              {" "}
              <Link href="/components/AllProducts">All Products</Link>
            </li>
          </ul>
          {/* search Bar */}
          <div className="flex items-center border rounded-sm border-slate-300">
            <span>
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="What you are looking for"
              className="pl-1 rounded-sm text-xs font-extralight font-soraFont placeholder:text-xs h-full bg-white shadow-sm  placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black  sm:text-sm focus:ring-1"
            />
          </div>
          {/* shoping cart */}
          <ShoppingCart />
        </nav>
      </header>
    </div>
  );
};

export default Header;
