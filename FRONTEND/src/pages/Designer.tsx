import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const designerProducts = [
  {
    id: 'd1',
    name: 'Designer Handbag',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    category: 'designer',
    description: 'Authentic designer handbag'
  },
  {
    id: 'd2',
    name: 'Designer Sunglasses',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    category: 'designer',
    description: 'Premium designer sunglasses'
  },
  {
    id: 'd3',
    name: 'Designer Watch',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
    category: 'designer',
    description: 'Luxury designer timepiece'
  }
];

export const Designer: React.FC = () => {
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
            Designer Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designerProducts.map((product) => (
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