import { FaAmazonPay } from "react-icons/fa";
import { FaGlobe, FaPallet, FaShield, FaTree, FaUsers } from "react-icons/fa6";
import { FiGlobe, FiZap } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { TbPalette, TbShield } from "react-icons/tb";

const features = [
  {
    icon: <TbPalette className="h-10 w-10 text-purple-500" />,
    title: "Curated Collections",
    description:
      "Discover handpicked digital art from the world's most innovative creators.",
  },
  {
    icon: <TbShield className="h-10 w-10 text-cyan-400" />,
    title: "Secure Transactions",
    description:
      "Advanced blockchain technology ensures authenticity and secure ownership.",
  },
  {
    icon: <FiZap className="h-10 w-10 text-pink-500" />, // zap icon
    title: "Lightning Fast",
    description:
      "Optimized platform performance for seamless browsing and transactions.",
  },
  {
    icon: <FiGlobe className="h-10 w-10 text-purple-500" />,
    title: "Global Community",
    description: "Connect with artists and collectors from around the world.",
  },
  {
    icon: <LuUsers className="h-10 w-10 text-cyan-400" />,
    title: "Artist Support",
    description:
      "Tools and resources to help artists showcase and monetize their work.",
  },
  {
    icon: <IoIosTrendingUp className="h-10 w-10 text-pink-500" />, // trending icon
    title: "Market Insights",
    description:
      "Advanced analytics to track trends and make informed collecting decisions.",
  },
];

export const WhyUs = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-8 relative overflow-hidden border-t border-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Why Choose <span className="text-pink-500">NeonArt</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            The ultimate platform for digital artists and collectors with
            cutting-edge features
          </p>

          {/* feature card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
