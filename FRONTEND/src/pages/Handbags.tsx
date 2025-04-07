import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const handbags = [
  {
    id: 'h1',
    name: 'Leather Tote Bag',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    category: 'handbags',
    description: 'Spacious leather tote for everyday use'
  },
  {
    id: 'h2',
    name: 'Crossbody Bag',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    category: 'handbags',
    description: 'Versatile crossbody bag'
  },
  {
    id: 'h3',
    name: 'Evening Clutch',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800',
    category: 'handbags',
    description: 'Elegant evening clutch'
  }
];

export const Handbags: React.FC = () => {
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
            Handbags Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {handbags.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};