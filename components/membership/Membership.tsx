"use client";

import { FaCheck } from "react-icons/fa6";

const membershipPlans = [
  {
    id: 1,
    name: "Basic",
    price: "Free",
    description: "Perfect for art enthusiasts and beginners",
    features: [
      "Browse unlimited artworks",
      "Follow up to 10 artists",
      "Join community discussions",
      "Receive weekly newsletter",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    borderColor: "border-gray-700",
    hoverBorderColor: "hover:border-cyan-400",
  },
  {
    id: 2,
    name: "Premium",
    price: "$19.99/month",
    description: "Ideal for serious collectors and art lovers",
    features: [
      "All Basic features",
      "Early access to new releases",
      "Exclusive artist interviews",
      "Discounted transaction fees",
      "Priority customer support",
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "default",
    borderColor: "border-purple-500",
    hoverBorderColor: "hover:border-purple-400",
    featured: true,
  },
  {
    id: 3,
    name: "Artist Pro",
    price: "$39.99/month",
    description: "For professional artists and creators",
    features: [
      "All Premium features",
      "Verified artist badge",
      "Featured in curated collections",
      "Advanced analytics dashboard",
      "Custom gallery page",
      "Zero platform fees",
    ],
    buttonText: "Join as Artist",
    buttonVariant: "outline",
    borderColor: "border-gray-700",
    hoverBorderColor: "hover:border-pink-500",
  },
];

export const Membership = () => {
  return (
    <>
      <section className="py-20 -mt-14 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Join Our <span className="text-purple-500">Membership</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Unlock exclusive benefits and take your digital art experience to
            the next level
          </p>

          {/* Membership card section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl overflow-hidden border ${
                  plan.borderColor
                } ${
                  plan.hoverBorderColor
                } transition-all duration-300 bg-gray-900/60 relative ${
                  plan.featured ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center text-sm py-3">
                    Most Popular
                  </div>
                )}
                <div className="p-6 pt-14">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="h-5 w-5 text-cyan-400 mr-2 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full rounded-xl py-3 cursor-pointer ${
                      plan.buttonVariant === "default"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        : `${plan.borderColor} text-white hover:bg-white/5 ${plan.hoverBorderColor}`
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
