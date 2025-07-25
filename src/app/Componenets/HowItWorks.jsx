import React from "react";

const steps = [
  {
    id: "01",
    icon: "/imgs/press-icon.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.",
  },
  {
    id: "02",
    icon: "/imgs/position-icon.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.",
  },
  {
    id: "03",
    icon: "/imgs/campaign-icon.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.",
  },
  {
    id: "04",
    icon: "/imgs/upload-press-release-icon.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8faff] py-16 px-4 md:px-10">
      <div className="md:max-w-3xl lg:max-w-5xl mx-auto text-center">
        <h2 className=" mb-14 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`wow animate__animated animate__fadeInUp`}
              data-wow-delay={`${index * 0.3}s`}
            >
              <div className="h-full  rounded-md bg-white shadow-sm px-3 py-8 text-center relative">
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-700 text-white text-lg font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
                    {step.id}
                  </div>
                </div>
                <img
                  src={step.icon}
                  alt="Step Icon"
                  className="h-20 mx-auto mb-6 mt-8"
                />
                <p className="text-gray-700 text-base md:text-lg">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="uppercase bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-full text-sm text-white transition-all duration-300">
            Get Started today
          </button>
        </div>
      </div>
    </section>
  );
}
