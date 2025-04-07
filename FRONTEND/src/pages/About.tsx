import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, ShoppingBag } from 'lucide-react';
import { Footer } from '../components/Footer';

const stats = [
  {
    icon: ShoppingBag,
    value: '2M+',
    label: 'Items Sold'
  },
  {
    icon: Users,
    value: '1M+',
    label: 'Happy Customers'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served'
  },
  {
    icon: Heart,
    value: '100K+',
    label: 'Positive Reviews'
  }
];

export const About: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Story
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-white">
              We're revolutionizing the way people think about secondhand fashion.
              Our mission is to make sustainable fashion accessible to everyone while
              reducing waste in the fashion industry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="inline-block p-4 bg-coral-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-coral-500" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To create a more sustainable fashion future by extending the lifecycle
                of quality clothing and accessories. We believe that secondhand
                doesn't mean second best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li>• Sustainability First</li>
                <li>• Quality Over Quantity</li>
                <li>• Fair & Transparent</li>
                <li>• Community Driven</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};