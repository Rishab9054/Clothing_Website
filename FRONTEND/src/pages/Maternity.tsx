import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

const maternityProducts = [
  {
    id: 'm1',
    name: 'Maternity Dress',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583073600538-f219abfb20bc?w=800',
    category: 'maternity',
    description: 'Comfortable maternity dress'
  },
  {
    id: 'm2',
    name: 'Maternity Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1583073600534-89899297e8b9?w=800',
    category: 'maternity',
    description: 'Stretchy maternity jeans'
  },
  {
    id: 'm3',
    name: 'Maternity Top',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583073600539-a0c69c0b5cd2?w=800',
    category: 'maternity',
    description: 'Stylish maternity top'
  }
];

export const Maternity: React.FC = () => {
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
            Maternity Collection
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maternityProducts.map((product) => (
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