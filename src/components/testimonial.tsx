import React from "react";

type Props = {};

const Testimonial = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://this-person-does-not-exist.com/img/avatar-gen112a8a01001705d3d653e00b03c74898.jpg"
                                />
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quas dolorum voluptates odio similique recusandae voluptatibus saepe nihil?
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className="text-gray-500">
                                    Senior Product Designer
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://this-person-does-not-exist.com/img/avatar-gen582d923e5dd86bf9ee15aff2fec02161.jpg"
                                />
                                <p className="leading-relaxed">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, non modi rerum saepe nisi nobis ipsum eaque aperiam quia odit.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">
                                    ALPER KAMU
                                </h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://this-person-does-not-exist.com/img/avatar-gen88645c30e37cac0d1e782047acc1daf1.jpg"
                                />
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nihil dignissimos ipsum ullam alias? Cumque maiores magni itaque doloremque deleniti!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">
                                    HENRY LETHAM
                                </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
