import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "../app/views/Products/page";
import PromotionsSection from "@/components/PromotionSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import CopyRight from "@/components/CopyRightSction";
import { client } from "../../sanity/lib/client";
import { Image } from "sanity";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    description,
    price,
    image,
    _id,
    category->{
      category,
    }
  }`);
  return res;
};

interface IProduct {
  title: string;
  description: string;
  price: number;
  image: Image;
  id: string;
}

export default async function Home() {
  const data: IProduct = await getProductData();

  return (
    <>
      <div>
        <Header />
        <Hero />
        <PromotionsSection productData={data} />
        <Products />
        <FeaturesSection />
        <NewsLetter />
        <Footer />
      </div>
      <CopyRight />
    </>
  );
}
