import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';

const accessories = [
  {
    id: 'a1',
    name: 'Designer Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800',
    description: 'Luxury timepiece with premium craftsmanship'
  },
  {
    id: 'a2',
    name: 'Leather Bag',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    description: 'Handcrafted leather bag with modern design'
  },
  {
    id: 'a3',
    name: 'Sunglasses',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    description: 'Premium sunglasses with UV protection'
  }
];

export const Accessories: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            Accessories
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessories.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};