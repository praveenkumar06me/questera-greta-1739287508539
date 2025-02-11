import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CloudSuite</h1>
          <p className="text-xl text-gray-600">Transforming businesses through innovative cloud solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Founder"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
            <p className="text-lg text-gray-600 mb-6">
              Robert, our visionary founder, established CloudSuite with a mission to revolutionize how businesses operate in the cloud. With over 15 years of experience in cloud computing and enterprise software, Robert has led CloudSuite to become a leading provider of comprehensive cloud solutions.
            </p>
            <p className="text-lg text-gray-600">
              Under his leadership, CloudSuite has helped thousands of businesses streamline their operations, improve efficiency, and accelerate growth through innovative cloud technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}