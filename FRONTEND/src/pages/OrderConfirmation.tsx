import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';

interface OrderInfo {
  orderNumber: string;
  shippingInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
}

export const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);

  useEffect(() => {
    const savedOrderInfo = sessionStorage.getItem('orderInfo');
    if (savedOrderInfo) {
      setOrderInfo(JSON.parse(savedOrderInfo));
      // Clear the session storage
      sessionStorage.removeItem('orderInfo');
    }
  }, []);

  if (!orderInfo) {
    navigate('/');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-6">
            Your order #{orderInfo.orderNumber} has been successfully placed.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <Phone className="h-5 w-5" />
              <span>Order confirmation SMS sent to {orderInfo.shippingInfo.phone}</span>
            </div>
            <p className="text-sm text-gray-500">
              We've sent the order details to your email at {orderInfo.shippingInfo.email}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/account/orders')}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
            >
              View Order Status
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-full hover:bg-gray-200"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};