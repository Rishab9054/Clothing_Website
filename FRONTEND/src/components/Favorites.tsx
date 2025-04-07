import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface FavoritesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Favorites: React.FC<FavoritesProps> = ({ isOpen, onClose }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { dispatch } = useCart();

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Added to cart!', {
      icon: '🛍️',
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute inset-y-0 right-0 max-w-full flex"
      >
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">Favorites</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              {favorites.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your favorites list is empty</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {favorites.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="mt-2 space-x-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="text-sm text-indigo-600 hover:text-indigo-500"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => toggleFavorite(item)}
                            className="text-sm text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};