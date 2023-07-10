/* eslint-disable @next/next/no-img-element */
'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Statistics from '@/components/statistics';
import Testimonial from '@/components/testimonial';
import Footer from '@/components/footer';

export default function Home() {
    return (
        <main>
            {/* <h1 className="text-4xl font-bold text-center my-2">Farm Friends</h1> */}
            <div className='mx-0 w-full'>
                <div className='absolute top-20 text-center z-10  text-black w-screen '>
                    <h1 className='text-6xl font-bold'>Farmer Friends</h1>
                    <p className='text-2xl font-semibold my-2'>Are you a <Link className='border-b-2 border-sky-900 text-sky-900 font-bold'  href='/customer/signup' >Customer</Link> or an <Link className='border-b-2 border-sky-900 text-sky-900 font-bold' href='/agent/signup'>Agent</Link> ?</p>
                    {/* <div className='flex justify-center'>    */}
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
                    className='mySwiper w-full h-[500px]'
                >
                    <SwiperSlide className=''>
                        <img
                            src='https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='slide1'
                            className='w-screen'
                        />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <img
                            src='https://images.pexels.com/photos/247616/pexels-photo-247616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='slide2'
                            className='w-screen'
                        />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <img
                            src='https://images.pexels.com/photos/247512/pexels-photo-247512.jpeg'
                            alt='slide3'
                            className='w-screen'
                        />
                    </SwiperSlide>
                </Swiper>
                <Statistics />
                <Testimonial />
                <Footer />
            </div>
        </main>
    );
}
