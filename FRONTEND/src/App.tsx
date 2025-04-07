import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Favorites } from './components/Favorites';
import { LoginModal } from './components/LoginModal';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CleanOut } from './pages/CleanOut';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { ProductDetails } from './pages/ProductDetails';
import { Women } from './pages/Women';
import { Premium } from './pages/Premium';
import { Designer } from './pages/Designer';
import { Shoes } from './pages/Shoes';
import { Handbags } from './pages/Handbags';
import { Plus } from './pages/Plus';
import { Maternity } from './pages/Maternity';
import { Kids } from './pages/Kids';
import { Deals } from './pages/Deals';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Accessories } from './pages/Accessories';

export const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <FavoritesProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
              <Navbar 
                onCartClick={() => setIsCartOpen(true)}
                onLoginClick={() => setIsLoginOpen(true)}
                onFavoritesClick={() => setIsFavoritesOpen(true)}
              />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/clean-out" element={<CleanOut />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/women" element={<Women />} />
                  <Route path="/premium" element={<Premium />} />
                  <Route path="/designer" element={<Designer />} />
                  <Route path="/shoes" element={<Shoes />} />
                  <Route path="/handbags" element={<Handbags />} />
                  <Route path="/accessories" element={<Accessories />} />
                  <Route path="/plus" element={<Plus />} />
                  <Route path="/maternity" element={<Maternity />} />
                  <Route path="/kids" element={<Kids />} />
                  <Route path="/deals" element={<Deals />} />
                  <Route path="/category/:category" element={<Category />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                </Routes>
              </AnimatePresence>
              <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              <Favorites isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
              <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
              <Toaster position="bottom-right" />
            </div>
          </FavoritesProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};