import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200',
    title: 'Summer Collection'
  },
  {
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200',
    title: 'Luxury Fashion'
  },
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    title: 'Designer Picks'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200',
    title: 'Trending Now'
  }
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Announcement Banner */}
      <div className="bg-coral-100 text-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center space-x-4"
          >
            <h2 className="text-3xl font-bold">Up to 50% Off</h2>
            <div className="text-lg">
              Plus free shipping! Make your first order today with code: 
              <span className="font-bold mx-2">NEW</span>
              <Link to="/details" className="underline">Details</Link>
            </div>
            <Link
              to="/shop-now"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800"
            >
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Hero with Sliding Images */}
      <div className="relative h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold mb-8"
                  >
                    {heroImages[currentImageIndex].title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl mb-12"
                  >
                    Discover our latest collection of premium fashion items
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mission Statement */}
      <div className="border-t border-b py-8 text-center">
        <p className="text-lg font-mono max-w-3xl mx-auto dark:text-white">
          We're an online consignment & thrift store for your closet, your wallet, and the planet.
        </p>
      </div>
    </div>
  );
};