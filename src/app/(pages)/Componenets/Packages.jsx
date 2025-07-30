"use client";

import React , {useRef} from "react";
import Slider from "react-slick";
import { FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const PricingSection = () => {
const sliderRef = useRef(null);

    const scrollPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const plans = [
        {
            title: "Premium",
            price: "$70.00",
            billed: "1 press release",
            features: [
                "450 Guaranteed Placements",
                "Digital Journal",
                "Street Insider",
                "Fox Media Outlets",
                "TV Station Media Sites",
                "Google Inclusion",
                "Yahoo Inclusion",
                "Bing Inclusion",
                "Online Newspaper",
                "Financial Feeds",
                "NCN Central",
                "Google News Inclusion",
                "Radio & Broadcast Media Stations",
                "Anchor Text Links within PR–5",
                "1500 word count limit",
            ],
        },
        {
            title: "Yahoo Package",
            price: "$400.00",
            oldPrice: "$590.00",
            billed: "1 press release",
            features: [
                "Yahoo Crypto",
                "Bing News",
                "Yahoo Finance",
                "APNews",
                "Benzinga",
                "450 Guaranteed Placements",
                "Yahoo Finance News",
                "Yahoo Tech",
                "Yahoo EU-US",
                "Yahoo Energia",
                "Yahoo Canada",
                "Yahoo Video",
                "Digital Journal",
                "Fox Media Outlets",
                "TV Station Media Sites",
                "1000 word count limit",
                "Radio & Broadcast Media Stations",
                "Anchor Text Links within PR–3",
            ],
            isHighlight: true,
        },
        {
            title: "Business Insider + Yahoo Package",
            price: "$500.00",
            billed: "1 press release",
            features: [
                "500+ Guaranteed Placements",
                "Business Insider",
                "Yahoo Finance",
                "AP News (Add-On)",
                "Market Watch",
                "Morning Star",
                "Street Insider",
                "Yahoo Finance News",
                "Yahoo Money",
                "Yahoo Sports",
                "Benzinga",
                "Fox Media Outlets",
                "Digital Journal",
                "Central Charts",
                "Nasdaq (Only for Public Companies)",
                "TV Station Media Sites",
                "Radio & Broadcast Media Stations",
                "Anchor Text Links within PR–5",
            ],
        },
    ];



    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1024, // Tablet
                 settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1280, // Desktop
                 settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true
                }
            },
        ],
    };

    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="md:max-w-4xl lg:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>

                <div className="relative px-10"> {/* Added padding for arrow visibility */}
                    {/* Corrected arrow buttons with proper onClick handlers */}
                    <button
                        onClick={() => { scrollPrev() }} // Left arrow should go previous
                        className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-gray-100 transition"
                    >
                        <FaArrowLeft className="text-gray-700" />
                    </button>
                    <button
                        onClick={() => { scrollNext() }} // Right arrow should go next
                        className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-gray-100 transition"
                    >
                        <FaArrowRight className="text-gray-700" />
                    </button>
                    
                    <Slider ref={sliderRef} {...settings}>

                        {plans.map((plan, idx) => (
                            <div key={idx} className="px-2">
                                <div
                                    className={`rounded-xl h-full overflow-hidden ${plan.isHighlight
                                        ? "border-3 bg-black border-blue-600 shadow-md"
                                        : "bg-white border border-gray-200"
                                        }`}
                                >
                                    {/* Ribbon */}
                                    <div className="flex items-center justify-center w-full h-10">
                                        <div
                                            className={`${plan.isHighlight ? "bg-blue-600" : "bg-[#f3f4f6]"
                                                } w-2/3 h-full`}
                                        >
                                            <div
                                                className={`flex items-center justify-center ${plan.isHighlight ? "bg-black" : "bg-white"
                                                    } h-full rounded-tl-lg rounded-tr-2xl`}
                                            ></div>
                                        </div>
                                        <div
                                            className={`flex items-center justify-center ${plan.isHighlight ? "bg-blue-600" : "bg-[#f3f4f6]"
                                                } rounded-bl-2xl flex-1 h-full text-sm`}
                                        >
                                            SAVE {(idx + 1) * 6}%
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`${plan.isHighlight ? "bg-blue-600" : "bg-[#f3f4f6]"
                                            }`}
                                    >
                                        <div
                                            className={`${plan.isHighlight ? "bg-black" : "bg-white"
                                                } p-6 pt-0 rounded-tr-2xl h-full`}
                                        >
                                            <h3
                                                className={`text-lg font-semibold mb-3 text-center ${plan.isHighlight ? "text-white" : "text-black"
                                                    }`}
                                            >
                                                {plan.title}
                                            </h3>
                                            <div className="flex justify-center space-x-2 items-center mb-4">
                                                {plan.oldPrice && (
                                                    <span className="text-xl text-gray-400 line-through">
                                                        {plan.oldPrice}
                                                    </span>
                                                )}
                                                <div className="text-xl text-blue-500 font-normal">
                                                    {plan.price}
                                                </div>
                                                <div className="text-xs text-blue-600">{plan.billed}</div>
                                            </div>

                                            <ul className="h-[220px] overflow-auto no-scrollbar space-y-2 mb-6">
                                                {plan.features.map((feature, i) => (
                                                    <li
                                                        key={i}
                                                        className={`flex items-start gap-2 text-xs sm:text-sm md:text-base ${plan.isHighlight ? "text-white" : "text-black"
                                                            }`}
                                                    >
                                                        <span className="bg-blue-600 h-5 w-5 rounded-full flex items-center justify-center">
                                                            <FaCheck className="text-xs text-white" />
                                                        </span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}

                                            </ul>

                                            <button className="w-full capitalize py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
                                                {plan.billed} for {plan.price}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
