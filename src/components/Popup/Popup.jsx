import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Popup = ({ orderPopup, setOrderPopup, product }) => {
  const navigate = useNavigate();

  if (!orderPopup || !product) return null;

  const handleContinueToCheckout = () => {
    navigate("/cart", { state: { product } }); // Pass product details to cart page
  };

  return (
    <div className="popup">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-[500px] rounded-lg shadow-lg relative p-6">
          <button
            onClick={() => setOrderPopup(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            <IoCloseOutline />
          </button>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Confirm Your Order</h2>
          </div>
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <img
              src={product.img}
              alt={product.title}
              className="h-20 w-20 object-cover rounded"
            />
            <div>
              <h4 className="font-medium text-gray-800">{product.title}</h4>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="font-bold text-gray-800 mt-1">₹{product.price}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setOrderPopup(false)}
              className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleContinueToCheckout}
              className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
