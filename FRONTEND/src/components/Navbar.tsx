import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onCartClick: () => void;
  onLoginClick: () => void;
  onFavoritesClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, onLoginClick, onFavoritesClick }) => {
  const { state } = useCart();
  const { favorites } = useFavorites();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { path: '/women', label: 'Women' },
    { path: '/premium', label: 'Premium' },
    { path: '/designer', label: 'Designer' },
    { path: '/shoes', label: 'Shoes' },
    { path: '/handbags', label: 'Handbags' },
    { path: '/accessories', label: 'Accessories' },
    { path: '/plus', label: 'Plus' },
    { path: '/maternity', label: 'Maternity' },
    { path: '/kids', label: 'Kids' },
    { path: '/deals', label: 'Deals', className: 'text-red-500' }
  ];

  const handleCheckout = () => {
    if (state.items.length > 0) {
      navigate('/checkout');
    } else {
      onCartClick();
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 border-b dark:border-gray-700">
          <Link to="/" className="text-2xl font-bold dark:text-white">THRIFTUP</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="font-medium dark:text-white">SHOP</Link>
            <Link to="/clean-out" className="font-medium dark:text-white">CLEAN OUT</Link>
            <Link to="/about" className="font-medium dark:text-white">ABOUT</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <button onClick={onFavoritesClick} className="p-2 relative">
              <Heart className="h-6 w-6 dark:text-white transition-transform duration-200 hover:scale-110" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            <button onClick={onLoginClick} className="p-2">
              <User className="h-6 w-6 dark:text-white" />
            </button>
            <button onClick={onCartClick} className="p-2 relative">
              <ShoppingCart className="h-6 w-6 dark:text-white" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            <button 
              onClick={handleCheckout}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              CHECK OUT
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:flex items-center justify-between h-12 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ${item.className || ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};