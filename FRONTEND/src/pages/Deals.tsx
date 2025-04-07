import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const dealProducts = [
  {
    id: 'deal1',
    name: 'Summer Dress',
    price: 29.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    category: 'deals',
    description: 'Beautiful summer dress at 50% off'
  },
  {
    id: 'deal2',
    name: 'Designer Bag',
    price: 199.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    category: 'deals',
    description: 'Authentic designer bag at 50% off'
  },
  {
    id: 'deal3',
    name: 'Premium Watch',
    price: 149.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
    category: 'deals',
    description: 'Luxury watch at 50% off'
  }
];

export const Deals: React.FC = () => {
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
            Special Deals
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dealProducts.map((product) => (
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