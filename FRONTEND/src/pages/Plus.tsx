import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const plusProducts = [
  {
    id: 'plus1',
    name: 'Floral Maxi Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
    category: 'plus',
    description: 'Beautiful floral maxi dress'
  },
  {
    id: 'plus2',
    name: 'Classic Blazer',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1548123378-363e55b61f35?w=800',
    category: 'plus',
    description: 'Professional blazer for any occasion'
  },
  {
    id: 'plus3',
    name: 'Comfortable Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    category: 'plus',
    description: 'Perfect fit comfortable jeans'
  }
];

export const Plus: React.FC = () => {
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
            Plus Size Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plusProducts.map((product) => (
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