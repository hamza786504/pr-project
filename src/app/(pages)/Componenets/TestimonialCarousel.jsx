"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    name: "Peter Dunbar",
    role: "Phoenix Arts Club",
    review: "The sure-fire way to have your efforts recognised",
    stars: 5,
    img: "/imgs/team/cindy-gruensfelder.jpg", // add your images in public/testimonials
  },
  {
    name: "Charles Brecque",
    role: "Legislate Technologies Limited",
    review:
      "PR Fire is an effective way of distributing your press release cost-effectively. The rewrite service is also a great way for increasing the likelihood of your press release appealing to journalists.",
    stars: 5,
    img: "/imgs/team/jacob-henry.jpg",
  },
  {
    name: "Steven Day",
    role: "House of Lords Debate",
    review:
      "Through your generosity and skill at PR Fire, we are able to get the message out there ahead of our hugely important House of Lords debate. I’m very grateful and impressed by your service.",
    stars: 4,
    img: "/imgs/team/liz-porter.jpg",
  },
  {
    name: "George O",
    role: "OnlyStats",
    review:
      "Dawn and Sam from PR Fire were really helpful, they formatted and distributed our PR quickly and professionally. Definitely bear in mind that results aren't always guaranteed. Despite this, we still got plenty of coverage that boosted our SEO. Highly recommended!",
    stars: 4,
    img: "/imgs/team/roy-stevens.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // slow auto scroll speed
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
            Our Results Speak for Themselves
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            PR Fire has helped businesses of all sizes get targeted coverage on
            high-authority media websites. Our clients come from a wide range of
            industries including law, finance, SEO, crypto and much more.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col items-start">
                {t.img && (
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{t.role}</p>
                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  “{t.review}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
