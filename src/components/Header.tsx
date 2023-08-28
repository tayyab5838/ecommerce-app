"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ShoppingCart from "../components/ShoppingCart";
import DropMenu from "./DropMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div
        className={`max-w-7xl mx-auto relative px-8 md:px-10 py-6 flex justify-between items-center bg-white`}
      >
        <Link
          href="/"
          className={`${isMobileMenuOpen ? "fixed" : ""} shrink-0`}
        >
          <Image
            src="/logo.webp"
            alt="Logo Image"
            className="mx-4"
            height={55}
            width={80}
          />
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <div>
            <Link href="/views/Category/Male">Male</Link>
          </div>
          <div>
            <Link href="/views/Category/Female">Female</Link>
          </div>
          <div>
            <Link href="/views/Category/Kids">Kids</Link>
          </div>
          <div>
            <Link href="/views/AllProducts">All Products</Link>
          </div>
          <div className="flex items-center border rounded-sm border-slate-300">
            <span className="px-2">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="What you are looking for"
              className="py-1 px-2 rounded-sm text-xs font-extralight font-soraFont placeholder:text-xs bg-white focus:outline-none focus:border-black focus:ring-black sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <ShoppingCart />
          </div>
          {/* Drop Menu */}
          <div>
            <DropMenu />
          </div>
        </nav>
        <div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden  p-2`}
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="h-6 w-6 fixed top-6 right-2 m-4" />
            ) : (
              <RxHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white h-screen fixed w-full flex pt-10 justify-center shadow-md py-4">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
            <ul className="flex flex-col text-center gap-4 font-bold tracking-wider">
              <ShoppingCart />
              <Link href="../views/Category/Male">Male</Link>
              <Link href="../views/Category/Female">Female</Link>
              <Link href="../views/Category/Kids">Kids</Link>
              <Link href="../views/AllProducts">All Products</Link>
              <Link href="../views/signin">Sign In</Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
