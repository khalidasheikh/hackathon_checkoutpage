import React from "react";
import { IoCartOutline, IoHeartOutline, IoSearch } from 'react-icons/io5'

const Upperhead = () => {
  return (
<header className="text-gray-700 border-2 body-font font-bold bg-gray">
  <div className="container text-gray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Find a Store</a>
      <a className="mr-5 hover:text-gray-900">Help</a>
      <a className="mr-5 hover:text-gray-900">Jouin Us</a>
      <a className="mr-5 hover:text-gray-900">Sign Up</a>
    </nav>
    
  </div>
</header>
  );
} 


export default Upperhead


export const Header = () => {
  return (
    
    <div>
        <header className="text-gray-600 border-3 body-font font-bold">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <div className=" w[1211px] h[60px] text-111111-600 flex items-center">
        <img src="/nike.png" alt="Nike Logo" className="h-8" />
      </div>
    </a>
    
    <nav className="md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-black justify-center gap-9">
    <a href="#" className="hover:text-black">New & Featured</a>
        <a href="#" className="hover:text-black">Men</a>
        <a href="#" className="hover:text-black">Women</a>
        <a href="#" className="hover:text-black">Kids</a>
        <a href="#" className="hover:text-black">Sale</a>
        <a href="#" className="hover:text-black">SNKRS</a>
        </nav>

    <input type='text' placeholder='Search' className='w-[100px]'>
    </input>
    <IoSearch className='text-black size-5' />
    <IoHeartOutline className='text-black size-6 mx-3'/>
    <IoCartOutline className='text-black size-6 mx-1' />
    
  </div>
</header>

    </div>
  )
}

export const Loginpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Birthday */}
          <div className="mb-4">
            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select a country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-1">Gender</span>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Thanks for creating an account with us. By checking this box, you agree to our terms and conditions.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>

  )
}

