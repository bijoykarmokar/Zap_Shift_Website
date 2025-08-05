// components/FeatureCards.jsx

import React from "react";
import { FaShippingFast, FaLock, FaHeadset, FaCogs } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShippingFast className="text-4xl text-amber-500 mx-auto mb-4" />,
    title: "Fast Delivery",
    description: "Experience lightning-fast delivery with our optimized logistics.",
  },
  {
    id: 2,
    icon: <FaLock className="text-4xl text-amber-500 mx-auto mb-4" />,
    title: "Secure System",
    description: "Your data and transactions are fully encrypted and safe.",
  },
  {
    id: 3,
    icon: <FaHeadset className="text-4xl text-amber-500 mx-auto mb-4" />,
    title: "24/7 Support",
    description: "We provide round-the-clock support to help you anytime.",
  },
  {
    id: 4,
    icon: <FaCogs className="text-4xl text-amber-500 mx-auto mb-4" />,
    title: "Easy Customization",
    description: "Easily personalize your experience with flexible tools.",
  },
];

const FeatureCards = () => {
  return (
    <div className="my-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-5">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer hover:scale-110 hover:bg-yellow-300 hover:text-white transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
