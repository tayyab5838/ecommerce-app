
import Header from './components/Header/page'
import Hero from './components/Hero/page'
import Products from './components/Products/page'
import PromotionsSection from './components/PromotionSection/page'
import FeaturesSection from './components/FeaturesSection/page'
import NewsLetter from './components/NewsLetter/page'
import Footer from './components/Footer/page'
import CopyRight from './components/CopyRightSection/page'
import { client } from '../../sanity/lib/client'
import { Image } from 'sanity'



export const getProductData = async()=>{
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
}

interface IProduct{
  title:string,
  description:string,
  price:number,
  image:Image,
  id:string
}

export default async function Home() {

  const data:IProduct = await getProductData()
  

  return (
    <>
    <div className='mx-16'>
    <Header/>
    <Hero/>
    <PromotionsSection productData={data}/>
    <Products/>
    <FeaturesSection/>
    <NewsLetter/>
    <Footer/>
    </div>
    <CopyRight/>
    </>
    
  )
}
