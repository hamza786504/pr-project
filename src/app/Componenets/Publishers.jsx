"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/imgs/Yahoo-finance-1.png",
  "/imgs/fox-seeklogo-1.png",
  "/imgs/CBS-1.png",
  "/imgs/google.png",
  "/imgs/MarketWatch-1.png",
  "/imgs/Benzinga-1.png",
];

const Publishers = () => {
  // Slider configuration
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-16">
      {/* Headings */}
      <div className="text-center mb-8">
        <p className="text-xl md:text-4xl font-semibold tracking-widest text-gray-700">
          • 300K+ PUBLISHERS •
        </p>
        <p className="mt-2 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          Ensure that your press release reaches top-tier media platforms.
          Our services for assured media publication begin at just <span className="font-semibold">$99</span>.
        </p>
      </div>

      <h2 className="text-lg md:text-2xl font-bold text-center mb-10 text-gray-900">
        Get Your Story on the News Radar
      </h2>

      {/* Carousel */}
      <div className="px-4 md:px-10">
        <Slider {...settings}>
          {logos.map((src, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center h-16 md:h-20">
                <Image
                  src={src}
                  alt={`Logo ${index}`}
                  width={150}
                  height={80}
                  className="object-cover max-h-[67px] mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Publishers;