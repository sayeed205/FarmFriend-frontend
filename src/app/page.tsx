"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";

// import required modules
import Footer from "@/components/footer";
import Statistics from "@/components/statistics";
import Testimonial from "@/components/testimonial";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
    return (
        <>
            <main>
                {/* <h1 className="my-2 text-4xl font-bold text-center">Farm Friends</h1> */}
                <div className="w-full mx-0">
                    <div className="absolute z-10 w-screen text-center text-black top-20 ">
                        <h1 className="text-6xl font-bold">Farmer Friends</h1>
                        <p className="my-2 text-2xl font-semibold">
                            Are you a{" "}
                            <Link
                                className="font-bold text-sky-900"
                                href="/customer/signup"
                            >
                                Customer
                            </Link>{" "}
                            or an{" "}
                            <Link
                                className="font-bold text-sky-900"
                                href="/agent/signup"
                            >
                                Agent
                            </Link>{" "}
                            ?
                        </p>
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
                        <SwiperSlide className="">
                            <img
                                src="https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="slide1"
                                className="w-screen"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <img
                                src="https://images.pexels.com/photos/247616/pexels-photo-247616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="slide2"
                                className="w-screen"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="">
                            <img
                                src="https://images.pexels.com/photos/247512/pexels-photo-247512.jpeg"
                                alt="slide3"
                                className="w-screen"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <Statistics />
                    <Testimonial />
                    <Footer />
                </div>
            </main>
        </>
    );
}
