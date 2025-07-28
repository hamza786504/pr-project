"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/imgs/bloomberg.png",
  "/imgs/yahoo-finance.png",
  "/imgs/yahoo-news.png",
  "/imgs/business insider.png",
  "/imgs/associated press.png",
  "/imgs/market watch.png",
  "/imgs/morningstar.png",
  "/imgs/central charts.png",
  "/imgs/bing news.png",
  "/imgs/benzinga.png",
  "/imgs/streetinsider.png",
  "/imgs/canadianinsider.png",
  "/imgs/fox28.png",
  "/imgs/cbs19.png",
  "/imgs/snnnews.png",
  "/imgs/etoro.png",
  "/imgs/digital journal.png",
  "/imgs/daily herald.png",
  "/imgs/baystreet.png",
  "/imgs/us time now.png",
  "/imgs/google news.png",
  "/imgs/azcentral.png",
  "/imgs/binance news.png",
  "/imgs/ceoca.png",
  "/imgs/social media blast.png",
];

const Publishers = () => {
  const leftToRightSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: false, // Left to right
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

  const rightToLeftSettings = {
    ...leftToRightSettings,
    rtl: true // Right to left
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-16">
      <div className="md:max-w-3xl lg:max-w-5xl mx-auto">
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
        <div className="space-y-4">
          {/* 1st Slider - Right to Left (odd) */}
          <Slider {...rightToLeftSettings}>
            {logos.slice(0, 5).map((src, index) => (
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

          {/* 2nd Slider - Left to Right (even) */}
          <Slider {...leftToRightSettings}>
            {logos.slice(6, 10).map((src, index) => (
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

          {/* 3rd Slider - Right to Left (odd) */}
          <Slider {...rightToLeftSettings}>
            {logos.slice(11, 15).map((src, index) => (
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

          {/* 4th Slider - Left to Right (even) */}
          <Slider {...leftToRightSettings}>
            {logos.slice(16, 20).map((src, index) => (
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

          {/* 5th Slider - Right to Left (odd) */}
          <Slider {...rightToLeftSettings}>
            {logos.slice(21, 25).map((src, index) => (
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
      </div>
    </section>
  );
};

export default Publishers;