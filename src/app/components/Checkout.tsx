import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        {/* Delivery Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Delivery Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* Billing Information */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <img
                src="/slide-2.png"
                alt="Product 1"
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <span className="flex-1">Product 1</span>
              <span>$20.00</span>
            </div>
            <div className="flex items-center justify-between">
              <img
                src="/Image-5.png"
                alt="Product 2"
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <span className="flex-1">Product 2</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$35.00</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-gray-400 text-white py-3 rounded-full hover:bg-gray-500 transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Checkout;
