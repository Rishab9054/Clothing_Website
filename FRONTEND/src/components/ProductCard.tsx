import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { ShoppingCart, Eye, Check, Heart } from 'lucide-react';
import { ProductModal } from './ProductModal';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch, state } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setIsAdded(true);
    toast.success('Added to cart!', {
      icon: '🛍️',
      style: {
        background: '#333',
        color: '#fff',
      },
    });

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleFavoriteClick = () => {
    toggleFavorite(product);
    toast.success(
      isFavorite(product.id) ? 'Removed from favorites!' : 'Added to favorites!',
      {
        icon: isFavorite(product.id) ? '💔' : '❤️',
        style: {
          background: '#333',
          color: '#fff',
        },
      }
    );
  };

  const isInCart = state.items.some(item => item.id === product.id);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isFavorite(product.id)
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600'
            } hover:scale-110 transition-all duration-200`}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite(product.id) ? 'fill-current' : ''
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Eye className="h-5 w-5" />
                <span>Details</span>
              </button>
              <button
                onClick={handleAddToCart}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  isAdded || isInCart
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isAdded || isInCart ? (
                  <>
                    <Check className="h-5 w-5" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};