import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const premiumProducts = [
  {
    id: 'p1',
    name: 'Premium Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    category: 'premium',
    description: 'Genuine leather jacket with premium finish'
  },
  {
    id: 'p2',
    name: 'Cashmere Sweater',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    category: 'premium',
    description: 'Luxurious cashmere sweater for ultimate comfort'
  },
  {
    id: 'p3',
    name: 'Silk Blouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800',
    category: 'premium',
    description: 'Pure silk blouse with elegant design'
  }
];

export const Premium: React.FC = () => {
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
            Premium Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumProducts.map((product) => (
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