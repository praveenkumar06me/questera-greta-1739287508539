import { motion } from 'framer-motion';
import { FaCloud, FaLock, FaChartLine, FaCogs } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaCloud className="text-4xl text-primary-500" />,
      title: "Cloud Storage",
      description: "Secure and scalable storage solutions for your business data"
    },
    {
      icon: <FaLock className="text-4xl text-primary-500" />,
      title: "Advanced Security",
      description: "Enterprise-grade security protocols to protect your assets"
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-500" />,
      title: "Analytics",
      description: "Comprehensive insights and reporting tools"
    },
    {
      icon: <FaCogs className="text-4xl text-primary-500" />,
      title: "Automation",
      description: "Streamline your workflow with powerful automation tools"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to scale your operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}