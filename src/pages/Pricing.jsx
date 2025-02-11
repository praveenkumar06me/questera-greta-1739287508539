import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 29,
      features: [
        "5GB Storage",
        "10 Team Members",
        "Basic Analytics",
        "24/7 Support"
      ]
    },
    {
      name: "Professional",
      price: 99,
      features: [
        "50GB Storage",
        "Unlimited Team Members",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: 299,
      features: [
        "Unlimited Storage",
        "Unlimited Everything",
        "Custom Solutions",
        "Dedicated Support",
        "Advanced Security",
        "API Access"
      ]
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <FaCheck className="text-primary-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}