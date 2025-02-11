import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">CloudSuite</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/features" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              Pricing
            </Link>
            <Link to="/get-started" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
              Get Started
            </Link>
            {user && (
              <Link to="/dashboard" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                Dashboard
              </Link>
            )}
            {user ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
              Features
            </Link>
            <Link to="/pricing" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
              Pricing
            </Link>
            <Link to="/get-started" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
              Get Started
            </Link>
            {user && (
              <Link to="/dashboard" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
                Dashboard
              </Link>
            )}
            {user ? (
              <>
                <Link to="/profile" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 px-3 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block text-gray-700 hover:text-primary-600 px-3 py-2">
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}