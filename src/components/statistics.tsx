import React from "react";
import { FiUsers } from "react-icons/fi";
import { LuVegan } from "react-icons/lu";
import { BiSolidCity } from "react-icons/bi";
import { GiFarmer } from "react-icons/gi";


type Props = {};

const Statistics = (props: Props) => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300">
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them man bun deep
                        jianbing selfies heirloom prism food truck ugh squid
                        celiac humblebrag.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="bg-gray-700 px-4 py-6 rounded-lg">
                            <FiUsers className="mx-auto w-12 h-full my-2" />
                            <h2 className="title-font font-medium text-3xl text-gray-200">
                                22.7K
                            </h2>
                            <p className="leading-relaxed">
                                Satisfied Consumers
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="bg-gray-700 px-4 py-6 rounded-lg">
                            <LuVegan className="mx-auto w-12 h-full my-2" />
                            <h2 className="title-font font-medium text-3xl text-gray-200">
                                1.3K
                            </h2>
                            <p className="leading-relaxed">Tons of corps sold</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="bg-gray-700 px-4 py-6 rounded-lg">
                            <BiSolidCity className="mx-auto w-12 h-full my-2" />
                            <h2 className="title-font font-medium text-3xl text-gray-200">
                                14
                            </h2>
                            <p className="leading-relaxed">Cities Across</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="bg-gray-700 px-4 py-6 rounded-lg">
                            <GiFarmer className="mx-auto w-12 h-full my-2" />
                            <h2 className="title-font font-medium text-3xl text-gray-200">
                                5K
                            </h2>
                            <p className="leading-relaxed">Connected Farmers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
