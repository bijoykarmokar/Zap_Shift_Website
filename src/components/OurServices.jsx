import React, { useState } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-amber-500" />,
    title: "Web Development",
    description:
      "We provide robust and scalable web development services using modern technologies. Our team builds custom solutions tailored to your business needs. From front-end to back-end, we handle everything. We follow agile practices. You get pixel-perfect UI. We use React, Node.js, and MongoDB. Our code is clean, secure, and optimized. We focus on performance and SEO. Testing and deployment are part of the package. Let us turn your ideas into a full product.",
  },
  {
    id: 2,
    icon: <FaPaintBrush className="text-4xl text-amber-500" />,
    title: "UI/UX Design",
    description:
      "We craft user interfaces that are not only beautiful but also functional. Our design team focuses on user experience. We conduct UX research and usability testing. Every design is tailored to your audience. We use tools like Figma and Adobe XD. Designs are responsive and mobile-friendly. We follow modern design trends. Accessibility is a priority. You get wireframes and prototypes. We turn design into smooth interaction.",
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-4xl text-amber-500" />,
    title: "Mobile App Development",
    description:
      "We build mobile apps for Android and iOS with high performance. We use Flutter and React Native. Apps are user-friendly and fast. We support custom features and third-party integrations. UX and UI are polished and tested. Push notifications, payments, and APIs included. Apps are scalable and maintainable. We follow agile sprints. Code is documented and reusable. Post-launch support is included.",
  },
  {
    id: 4,
    icon: <FaCloud className="text-4xl text-amber-500" />,
    title: "Cloud Solutions",
    description:
      "Our cloud experts help you migrate and scale. We work with AWS, Azure, and GCP. Deploy secure, scalable cloud apps. We set up CI/CD pipelines. You get 99.9% uptime. Our team configures servers and storage. We optimize cost and performance. Monitoring and logging tools included. We ensure data backups and recovery. Go cloud-native with our expertise.",
  },
  {
    id: 5,
    icon: <FaLock className="text-4xl text-amber-500" />,
    title: "Cybersecurity",
    description:
      "We protect your digital assets from threats. Our security audits identify vulnerabilities. We offer penetration testing. We implement firewalls and SSL. Two-factor authentication supported. We ensure data privacy and compliance. Real-time threat monitoring enabled. We educate teams with best practices. Security patches and updates included. Sleep better with us guarding your systems.",
  },
  {
    id: 6,
    icon: <FaChartLine className="text-4xl text-amber-500" />,
    title: "Digital Marketing",
    description:
      "We grow your online presence and conversions. SEO optimization improves visibility. PPC ads bring instant traffic. Social media campaigns that convert. Email marketing and automation included. Analytics and reports provided. We manage content and blogs. Targeted audience engagement. Build your brand's voice online. Get more leads and customers with us.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  const shortDescription = description.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <div className="card bg-base-100 shadow-xl hover:scale-110 hover:bg-amber-300 cursor-pointer transition duration-300">
      <div className="card-body text-center">
        <div className="flex justify-center mb-2">{icon}</div>
        <h2 className="card-title justify-center text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">
          {expanded ? description : shortDescription}
        </p>
        <button
          onClick={toggleExpand}
          className="mt-3 text-blue-600 hover:underline text-sm"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="my-20">
      <h2 className="text-xlmd:text-2xl lg:text-4xl font-bold text-center mb-10">Our Services</h2>
      <p className="w-3/4 mx-auto text-center my-5">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
