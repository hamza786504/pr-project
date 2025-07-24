import { FaCheckCircle } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonLinesFill, BsGraphUp } from "react-icons/bs";
import { MdOutlineTaskAlt, MdOutlineEmail, MdSms } from "react-icons/md";

const features = [
  {
    title: "Customer Management",
    icon: <BsFillPersonBadgeFill className="text-white text-xl" />,
    color: "bg-[#6b5bff]",
    points: [
      "Organize your Contacts and Prospects",
      "Manage tasks, meetings, notes and more",
      "Get 360° view of your customer",
    ],
  },
  {
    title: "Lead Management",
    icon: <BsPersonLinesFill className="text-white text-xl" />,
    color: "bg-[#2971f5]",
    points: [
      "Organize the Sales Process with Ease",
      "Convert promising leads to deals faster",
      "Measure the effectiveness of marketing",
    ],
  },
  {
    title: "Sales Pipeline",
    icon: <BsGraphUp className="text-white text-xl" />,
    color: "bg-[#00b341]",
    points: [
      "Create multiple sales pipeline",
      "Organise, track and win more deals",
      "Never lose a deal due to missed followup",
    ],
  },
  {
    title: "Task Management",
    icon: <MdOutlineTaskAlt className="text-white text-xl" />,
    color: "bg-[#ff5e3a]",
    points: [
      "Keep track of your tasks in real time",
      "Monitor who's doing what at a glance",
      "Centralize communication in one place",
    ],
  },
  {
    title: "Email Marketing",
    icon: <MdOutlineEmail className="text-white text-xl" />,
    color: "bg-[#00e09d]",
    points: [
      "Upload contacts to create lists",
      "Save time with automation",
      "Send emails instantly or schedule later",
    ],
  },
  {
    title: "SMS Marketing",
    icon: <MdSms className="text-white text-xl" />,
    color: "bg-[#ff8f2f]",
    points: [
      "Schedule and send personalized SMS",
      "Upload contacts, organise them with lists",
      "Save time by creating SMS templates",
    ],
  },
];

export default function SalesFeaturesSection() {
  return (
    <section className="bg-[#f3f7ff] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          A sales platform designed <br />
          with <span className="text-[#e40078] font-bold">revenue growth</span> in mind
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Increase your sales teams' efficiency and accelerate the revenue.
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
