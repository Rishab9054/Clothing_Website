import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const shoes = [
  {
    id: 's1',
    name: 'Classic Leather Boots',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800',
    category: 'shoes',
    description: 'Timeless leather boots for any occasion'
  },
  {
    id: 's2',
    name: 'Designer Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800',
    category: 'shoes',
    description: 'Comfortable designer sneakers'
  },
  {
    id: 's3',
    name: 'Elegant Heels',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    category: 'shoes',
    description: 'Sophisticated heels for formal occasions'
  }
];

export const Shoes: React.FC = () => {
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
            Shoes Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shoes.map((product) => (
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