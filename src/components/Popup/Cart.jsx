import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // If there's a product passed from location state, add it to the cart
    if (location.state && location.state.product) {
      const newProduct = location.state.product;
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const isProductInCart = storedCartItems.some(item => item.id === newProduct.id);

      if (!isProductInCart) {
        const updatedCartItems = [...storedCartItems, newProduct];
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Save updated cart to localStorage
      }
    }
  }, [location]);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update cart in localStorage
  };

  // Calculate total price and delivery charge
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const deliveryCharge = cartItems.length > 0 ? 49 * cartItems.length : 0; // Delivery charge ₹49 per product, or 0 if no items
    return total + deliveryCharge;
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Link
          to="/"
          className="text-primary hover:text-secondary text-lg font-medium"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Cart items */}
      <div className="space-y-6">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>Your cart is empty.</p>
            <Link
              to="/"
              className="text-primary hover:text-secondary"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white shadow-lg rounded-md"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-all duration-200"
                >
                  <FaTrashAlt className="text-xl" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 bg-gray-100 p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Subtotal</span>
          <span className="text-xl font-semibold">₹{calculateTotal() - 49 * cartItems.length}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Delivery Charge</span>
          <span className="text-xl font-semibold">₹{cartItems.length > 0 ? 49 * cartItems.length : 0}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold">Total</span>
          <span className="text-2xl font-bold">₹{calculateTotal()}</span>
        </div>

        {/* Proceed to Checkout Button */}
        <Link
          to="/checkout"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full text-center font-semibold"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
