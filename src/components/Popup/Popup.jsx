import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [isConfirmed, setIsConfirmed] = useState(false); // New state for order confirmation

  if (!orderPopup) return null;

  const handleConfirmOrder = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setOrderPopup(false); // Close the popup after confirmation
      setIsConfirmed(false); // Reset the confirmation message
    }, 2000); // Optional delay to show the confirmation message for 2 seconds
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-[500px] rounded-lg shadow-lg relative p-6">
              {/* Close Icon */}
              <button
                onClick={() => setOrderPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                <IoCloseOutline />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                  Confirm Your Order
                </h2>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Review your order details before proceeding to payment.
                </p>
              </div>

              {/* Order Summary */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h4 className="text-gray-800 font-medium">Wireless Earbuds</h4>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <p className="text-gray-800 font-semibold">₹2,499</p>
                  </div>
                  {/* Item 2 */}
                  <div className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h4 className="text-gray-800 font-medium">Cotton T-Shirt</h4>
                      <p className="text-sm text-gray-500">Quantity: 2</p>
                    </div>
                    <p className="text-gray-800 font-semibold">₹999</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-800 font-medium">₹3,498</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping Fee</p>
                    <p className="text-gray-800 font-medium">₹50</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Tax</p>
                    <p className="text-gray-800 font-medium">₹70</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold text-gray-800">Total</p>
                  <p className="text-lg font-bold text-orange-500">₹3,618</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setOrderPopup(false)}
                  className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmOrder} // Handle confirmation on click
                  className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition"
                >
                  Confirm Order
                </button>
              </div>

              {/* Confirmation Message */}
              {isConfirmed && (
                <div className="mt-4 text-center text-green-500 font-semibold">
                  Your order is confirmed! Thank you for shopping with us.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
