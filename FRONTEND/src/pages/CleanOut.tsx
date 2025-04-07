import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Recycle, Truck } from 'lucide-react';
import { Footer } from '../components/Footer';

const steps = [
  {
    icon: Package,
    title: 'Pack Your Items',
    description: 'Gather your gently used clothing and accessories'
  },
  {
    icon: Truck,
    title: 'Ship for Free',
    description: 'We provide a prepaid shipping label'
  },
  {
    icon: DollarSign,
    title: 'Get Paid',
    description: 'Earn up to 80% when your items sell'
  },
  {
    icon: Recycle,
    title: 'Support Sustainability',
    description: 'Help reduce fashion waste'
  }
];

export const CleanOut: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Clean Out Your Closet
            </motion.h1>
            <p className="text-xl text-gray-600">
              Turn your closet into cash while supporting sustainable fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Clean Out
            </button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};