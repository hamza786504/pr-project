// components/BoostPresenceSection.jsx

export default function BoostPresenceSection() {
  return (
    <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16 px-6">
      <div className="md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold mb-6">
            Lorem ipsum dolor sit amet consectetur?
          </h2>
          <p className="text-center md:text-start text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maiores perspiciatis blanditiis iure suscipit!
          </p>
        </div>

        {/* Right Button + Benefits */}
        <div className="flex flex-col items-start md:items-center">
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full text-base transition duration-300 capitalize">
            quo distinctio
          </button>
          <div className="justify-center w-full mt-4 text-sm flex flex-col md:flex-row md:items-center text-white space-y-1 md:space-y-0 md:space-x-6">
            <div className="justify-center md:justify-start flex items-center space-x-2">
              <span className="text-white">✔</span>
              <span>No credit card required</span>
            </div>
            <div className="justify-center md:justify-start flex items-center space-x-2">
              <span className="text-white">✔</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
