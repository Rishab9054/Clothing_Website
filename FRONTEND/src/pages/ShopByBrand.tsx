import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { Pagination } from '../components/Pagination';
import { Footer } from '../components/Footer';

const brands = [
  {
    id: 'b1',
    name: 'Luxury Brand Collection',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    category: 'brands',
    description: 'Premium luxury brand items'
  },
  // ... Add 11 more brands here
];

const ITEMS_PER_PAGE = 6;

export const ShopByBrand: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(brands.length / ITEMS_PER_PAGE);
  
  const currentBrands = brands.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            Shop by Brand
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentBrands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ProductCard product={brand} />
              </motion.div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};