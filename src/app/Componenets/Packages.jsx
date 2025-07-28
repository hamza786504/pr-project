"use client";

const Packages = () => {

  const packages = [
    {
      title: "Premium",
      price: "$70.00",
      description: "1 press release",
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
      demoLink: "#",
      btnText: "1 press release for $70.00",
    },
    {
      title: "Yahoo Package",
      price: "$400.00",
      description: "1 press release",
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
      demoLink: "#",
      btnText: "1 press release for $400.00",
    },
    {
      title: "Business Insider + Yahoo Package",
      price: "$500.00",
      description: "1 press release",
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
      demoLink: "#",
      btnText: "1 press release for $500.00",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="text-center mb-12 wow animate__fadeInUp">
        <h2 className="text-4xl font-bold text-gray-800">Our Packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="wow animate__fadeInUp bg-white shadow-xl rounded-2xl border hover:shadow-2xl transition-all duration-300 flex flex-col"
            data-wow-delay={`${idx * 0.2}s`}
          >
            <div className="p-6 border-b text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {pkg.title}
              </h3>
              <p className="text-3xl font-bold text-blue-600">{pkg.price}</p>
              <p className="text-sm text-gray-500">{pkg.description}</p>
            </div>
            <ul className="flex-1 p-6 space-y-2 text-sm text-gray-700">
              {pkg.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-start gap-2">
                  <span className="text-green-500 text-lg">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6 mt-auto text-center">
              <a
                href={pkg.demoLink}
                className="text-sm text-blue-500 hover:underline block mb-3"
              >
                For Demo PR Report: Click here
              </a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
                {pkg.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
          View all
        </button>
      </div>
    </section>
  );
};

export default Packages;
