import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const kidsProducts = [
  {
    id: 'k1',
    name: 'Kids Dress',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800',
    category: 'kids',
    description: 'Adorable kids dress'
  },
  {
    id: 'k2',
    name: 'Kids Shoes',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800',
    category: 'kids',
    description: 'Comfortable kids shoes'
  },
  {
    id: 'k3',
    name: 'Kids Jacket',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800',
    category: 'kids',
    description: 'Warm kids jacket'
  }
];

export const Kids: React.FC = () => {
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
            Kids Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kidsProducts.map((product) => (
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