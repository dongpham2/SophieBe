import React from 'react'
import { Carousel } from 'flowbite-react';
import bannerNex from "../assets/images/bannerNex.png"

function Home() {
  return (
    <div className='bg-[#f5f7fa]'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={bannerNex} />
                    </div>
                    <div className='md:w-1/2 '>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary'>from 8 years</span></h1>
                        <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                        <button className='px-7 py-2 bg-[#4caf4f] text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Register</button>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={bannerNex} />
                    </div>
                    <div className='md:w-1/2 '>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>We have many factures and more than <span className='text-brandPrimary'>8 years experience</span></h1>
                        <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a developer</p>
                        <button className='px-7 py-2 bg-[#4caf4f] text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Register</button>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={bannerNex} />
                    </div>
                    <div className='md:w-1/2 '>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary'>from 8 years</span></h1>
                        <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media</p>
                        <button className='px-7 py-2 bg-[#4caf4f] text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Register</button>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Home