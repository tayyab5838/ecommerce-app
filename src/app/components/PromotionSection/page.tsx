import Image from 'next/image'
import React from 'react'
import {client} from '../../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function urlFor(source:string) {
  return builder.image(source)
}

const PromotionsSection = ({productData}:any) => {
  const sliceData = productData.slice(0,2);
  console.log("slice"+sliceData);
  return (
    <section className='mt-12'>
        {/* Top Content */}
        <div className='text-center'>
          <span className='text-blue-700 font font-semibold text-xs font-soraFont'>PROMOTIONS</span>
          <h3 className='font-bold font-soraFont'>Our Promotions Events</h3>
        </div>

        <div className='flex mt-5'>
            {/* Left Side */}
            <div className='flex-1'>
                {/* Upper div */}
                <div className='flex bg-[#d6d6d8]  px-4 items-center justify-between'>
                    <div className='font-soraFont'>
                     <h3 className='font-bold font-soraFont'>GET UP TO 60%</h3>
                     <p className='font-soraFont'>For the summer season</p>
                    </div>
                    <div>
                    <Image src={"/promotions/event1.webp"} alt='Event 1 image' height={170} width={150}/>
                    </div>
                </div>
                {/* lower div */}
                <div className='bg-[#212121] items-center text-white text-center py-6 mt-2'>
                    <h3 className='font-bold font-soraFont text-lg'>GET 30% Off</h3>
                    <p className='font-soraFont text-xs font-light mt-2'>USE PROMO CODE</p>
                    <button className='bg-[#474747] py-0.5 px-4 rounded-sm text-sm font-medium mt-1'>DINEWEEKENDSALE</button>
                </div>
            
            </div>
            {/* Right Side */}
            <div className='flex-1 flex gap-3 ml-4 '>
                {/* Left Image div */}
                {
                    sliceData.map((item:any,i:number)=>(
                        
                    <div key={i} className='bg-[#efe1c7] flex-1 px-3 overflow-y-hidden max-h-[251px] pt-4'>
                    <div className='text-xs font-soraFont  font-normal'>
                    <p>{item.title}</p>
                    <span className='line-through'>$100.00</span><span className='font-bold'> ${item.price}</span>
                    </div>
                    <Link href={`/components/OrderPage/${item._id}`}>
                    <Image className='mt-3' src={urlFor(item.image[0].asset._ref).url()} alt='Event 2 Image' height={150} width={150}/>
                    
                      </Link>
                     </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default PromotionsSection