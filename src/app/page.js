/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Link from 'next/link';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Home() {
  return (
    <main>
      {/* <h1 className="text-4xl font-bold text-center my-2">Farm Friends</h1> */}
      <div className="mx-0 w-full">
        <div className="absolute top-20 text-center z-10  text-black w-screen ">
          <h1 className="text-4xl font-bold">Farm Friends</h1>
          <p>This is the constant content.</p>
          <div className="flex justify-center">
            <Link href="/buyer/signup" className="bg-green-500 px-4 mx-4 hover:bg-green-700 text-white font-bold py-2 rounded  ">
              Buyer
            </Link>
            <Link href="/seller/signup" className="bg-green-500 px-4 mx-4 hover:bg-green-700 text-white font-bold py-2 rounded  ">
              Seller
            </Link>
            </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-[500px]"
        >
          <SwiperSlide className=''>
            <img src='https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='slide1' className='w-screen' />
          </SwiperSlide>
          <SwiperSlide className=''>
            <img src='https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='slide2' className='w-screen' />
          </SwiperSlide>

        </Swiper>
      </div>
    </main>
  );
}

