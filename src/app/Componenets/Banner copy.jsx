import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Banner() {
    return (

        <>
            <header className="overflow-hidden w-full top-0 left-0 min-h-screen relative">
                <div className="absolute left-0 top-0 w-full h-full block bg-bottom bg-no-repeat bg-cover opacity-0 transition-all duration-300 ease-in-out"
                    style={{ backgroundImage: "url('/imgs/banner-bg-2b.png')" }}></div>

                <div className="block z-10 relative h-screen w-full overflow-hidden">
                    <div className="z-10">
                        <div className="absolute bottom-0 right-0"><img src="/imgs/bg-over-1.webp" alt="" /></div>
                        <div className="absolute bottom-0 left-0"><img src="/imgs/bg-over-2.webp" alt="" /></div>
                    </div>

                    <div className="absolute z-[11] w-[170px] bottom-[40px] right-[690px] animate-scale">
                        <img src="/imgs/graph.png" alt="" />
                    </div>
                    <div className="rocket"><img src="/imgs/rocket-n.png" alt="" /></div>
                    <div className="elem-2"><img src="/imgs/element-2.webp?v=sdf" alt="" /></div>
                    <div className="elem-3"><img src="/imgs/technoo.png?v=dfg" alt="" /></div>
                    <div className="lg:max-w-5xl md:max-w-4xl mx-auto relative flex flex-col md:flex-row items-center justify-between banner-container">
                        <div className="w-full md:w-1/2 text-center md:text-start">
                            <div className="rank-item">
                                <div className="rank"># 1</div>
                                <div className="rank-text">DIGITAL SUCCESS PLATFORM</div>
                            </div>
                            <h1 className='inline-block text-xl sm:text-3xl md:text-5xl text-center md:text-start font-bold leading-normal my-1'>Unlock Your Online <span className="text-[#6d02c0]">Growth</span> Potential</h1>
                            <h2 className="text-base text-[#242423] mobiletitle">Find everything you need to gain more traffic, get leads,
                                boost SEO, engage users and convert sales.</h2>
                            <h2 className="text-base text-[#242423] desktoptitle">From digital products to marketing tools, Zumvu offers
                                everything you need to drive more traffic, generate leads, boost SEO, engage users and
                                convert sales - effortlessly.</h2>
                            <div className="flex justify-center md:justify-start items-center space-x-2 mt-5">
                                <a
                                    href="/"
                                    className="px-3 py-2 rounded-3xl text-base border-2 text-center text-white border-[#a807ff] bg-[#a807ff] hover:bg-black hover:border-black transition-all ease-in-out uppercase inline-flex items-center gap-2"
                                >
                                    Get Started
                                    <FaLongArrowAltRight className="ms-0" />
                                </a>

                                <a
                                    href="/"
                                    className="px-3 py-2 rounded-3xl text-base border-2 text-center text-[#242423] bg-transparent border-[#242423] hover:bg-black hover:border-black hover:text-white transition-all ease-in-out uppercase inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <FaLongArrowAltRight className="ms-0" />
                                </a>
                            </div>

                            <div className="stats">
                                <div className="stat"><i className="fas fa-check-circle"></i> Trusted by <span>500K+</span>
                                    Businesses Worldwide</div>
                            </div>
                        </div>
                        <div className="banner-flex-coltwo">
                            <img src="/imgs/banner-demo-3.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Banner
