import React from 'react';
import { FaLongArrowAltRight, FaCheckCircle } from "react-icons/fa";

function Banner() {
  return (
    <section
      className="w-full h-full flex items-center min-h-screen bg-bottom bg-no-repeat transition-all duration-300 ease-in-out"
      style={{ backgroundImage: "url('/imgs/banner-bg-2b.png')" }}
    >
         {/* <div className="absolute bottom-[0px] max-md:left-[10px] md:right-[490px] z-[11] w-[170px]  animate-scale">
                    <img src="/imgs/graph.png" alt="" />
                </div>
                <div className="absolute bottom-[0px] max-md:left-[10px] md:right-[490px] rocket top-24 w-24">
                    <img src="/imgs/rocket-n.png" className='w-full' alt="" />
                </div>
                <div className="absolute bottom-[0px] max-md:left-[10px] md:right-[490px] elem-2">
                    <img src="/imgs/element-2.webp?v=sdf" alt="" />
                </div>
                <div className="absolute bottom-[0px] max-md:left-[10px] md:right-[490px] elem-3">
                    <img src="/imgs/technoo.png" alt="" />
                </div> */}
      <div className="py-8 px-3 md:max-w-3xl lg:max-w-5xl mx-auto relative flex flex-col md:flex-row items-center justify-between banner-container">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 text-center md:text-start">
          <div
            className="wow animate__animated animate__fadeInLeft"
            data-wow-delay="0s"
          >
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="px-3 py-[4px] text-white font-medium rounded-full bg-gradient-to-r from-[#a238bb] to-[#e64671] bg-cover mr-[15px] text-[13px]"># 1</div>
              <div className="text-sm">DIGITAL SUCCESS PLATFORM</div>
            </div>
          </div>

          <h1
            className="wow animate__animated animate__fadeInLeft inline-block text-xl sm:text-3xl md:text-5xl text-center md:text-start font-bold leading-tight my-1"
            data-wow-delay="0.2s"
          >
            Unlock Your Online <span className="text-[#6d02c0]">Growth</span> Potential
          </h1>

          <p
            className="wow animate__animated animate__fadeInLeft text-base md:text-lg text-[#242423] my-2"
            data-wow-delay="0.4s"
          >
            Find everything you need to gain more traffic, get leads, boost SEO, engage users and convert sales. From digital products to marketing tools, Zumvu offers everything you need to drive more traffic, generate leads, boost SEO, engage users and convert sales - effortlessly.
          </p>

          <div
            className="wow animate__animated animate__fadeInLeft flex justify-center md:justify-start items-center space-x-2 mt-5"
            data-wow-delay="0.6s"
          >
            <a
              href="/"
              className="px-3 md:px-4 py-1.5 rounded-3xl text-xs sm:text-sm md:text-base font-normal border-2 text-center text-white border-[#a807ff] bg-[#a807ff] hover:bg-black hover:border-black transition-all ease-in-out uppercase inline-flex items-center gap-2"
            >
              Get Started
              <FaLongArrowAltRight className="ms-0" />
            </a>

            <a
              href="/"
              className="px-3 md:px-4 py-1.5 rounded-3xl text-xs sm:text-sm md:text-base font-normal border-2 text-center text-[#242423] bg-transparent border-[#242423] hover:bg-black hover:border-black hover:text-white transition-all ease-in-out uppercase inline-flex items-center gap-2"
            >
              Request Demo
              <FaLongArrowAltRight className="ms-0" />
            </a>
          </div>

          <div
            className="wow animate__animated animate__fadeInLeft border-t border-[#bdb8be] my-6 pt-6 w-full"
            data-wow-delay="0.8s"
          >
            <div className="text-xs sm:text-base flex items-center justify-center md:justify-start">
              <FaCheckCircle size={20} className="mr-3 text-pink-600" />
              Trusted by <span className='text-xl mx-1 font-bold'>500K+</span> Businesses Worldwide
            </div>
          </div>
        </div>

        {/* RIGHT SECTION IMAGE */}
        <div
          className="w-full md:w-1/2 text-center wow animate__animated animate__flipInY"
          data-wow-delay="1s"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            transition: "transform 1s ease-in-out",
          }}
        >
          <img
            src="/imgs/banner-demo-3.png"
            alt=""
            className="w-11/12 max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
