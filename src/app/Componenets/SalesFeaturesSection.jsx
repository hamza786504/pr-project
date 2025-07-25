import { FaCheckCircle } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonLinesFill, BsGraphUp } from "react-icons/bs";
import { MdOutlineTaskAlt, MdOutlineEmail, MdSms } from "react-icons/md";
const features = [
  {
    title: "Lorem Ipsum Dolor",
    icon: <BsFillPersonBadgeFill className="text-white text-xl" />,
    color: "bg-[#6b5bff]",
    points: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipisicing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna aliqua",
    ],
  },
  {
    title: "Consectetur Adipiscing",
    icon: <BsPersonLinesFill className="text-white text-xl" />,
    color: "bg-[#2971f5]",
    points: [
      "Ut enim ad minim veniam quis nostrud",
      "Exercitation ullamco laboris nisi ut aliquip",
      "Ex ea commodo consequat duis aute",
    ],
  },
  {
    title: "Sed Do Eiusmod",
    icon: <BsGraphUp className="text-white text-xl" />,
    color: "bg-[#00b341]",
    points: [
      "Tempor incididunt ut labore et dolore",
      "Magna aliqua ut enim ad minim veniam",
      "Quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    title: "Tempor Incididunt",
    icon: <MdOutlineTaskAlt className="text-white text-xl" />,
    color: "bg-[#ff5e3a]",
    points: [
      "Duis aute irure dolor in reprehenderit",
      "In voluptate velit esse cillum dolore",
      "Eu fugiat nulla pariatur excepteur",
    ],
  },
  {
    title: "Dolore Magna Aliqua",
    icon: <MdOutlineEmail className="text-white text-xl" />,
    color: "bg-[#00e09d]",
    points: [
      "Velit esse cillum dolore eu fugiat",
      "Nulla pariatur excepteur sint occaecat",
      "Cupidatat non proident sunt in culpa",
    ],
  },
  {
    title: "Minim Veniam Quis",
    icon: <MdSms className="text-white text-xl" />,
    color: "bg-[#ff8f2f]",
    points: [
      "Officia deserunt mollit anim id est laborum",
      "Lorem ipsum dolor sit amet consectetur",
      "Adipisicing elit sed do eiusmod tempor",
    ],
  },
];

export default function SalesFeaturesSection() {
  return (
    <section className="bg-[#f3f7ff] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Lorem ipsum dolor sit  <br />
          amet <span className="text-[#e40078] font-bold">consectetur adipisicing</span>  elit fuga.
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div className=" md:max-w-3xl lg:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {features.map((feature, index) => (
  <div
    key={index}
    className={`wow animate__animated animate__fadeInUp bg-white shadow-sm rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all duration-300`}
    data-wow-delay={`${index * 0.2}s`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-8 h-8 rounded-md flex items-center justify-center ${feature.color}`}>
        {feature.icon}
      </div>
      <h3 className="text-md sm:text-lg font-semibold text-gray-800">{feature.title}</h3>
    </div>
    <ul className="space-y-2 text-sm text-gray-700 mb-4">
      {feature.points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <FaCheckCircle className="text-blue-500 mt-1 text-sm" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <button className="text-sm text-blue-600 font-medium hover:underline">
      Learn more &rarr;
    </button>
  </div>
))}

      </div>

      <div className="text-center mt-10">
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-sm">
          KNOW MORE
        </button>
      </div>
    </section>
  );
}
