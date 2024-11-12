import React from "react";

export const Header = () => {
  return (
    <div className='bg-[#0C0C0C] p-6 flex items-center justify-between'>
      <div className='text-white text-3xl font-inter select-none'>
        <span className='text-white'>Ve</span>
        <span className='text-purple-600 font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>
          Q
        </span>
        <span className='text-white'>tra</span>
      </div>

      <div className='flex items-center space-x-4 text-gray-300 select-none'>
        <input
          type='text'
          placeholder='Search something'
          className='bg-transparent border-none outline-none text-gray-300 text-lg w-80'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-purple-600 hover:text-purple-400 transition-colors duration-100 ease-in-out'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z'
          />
        </svg>
      </div>
      <div className='flex items-center space-x-4'>
        <button className='bg-gradient-to-r from-blue-800 to-purple-500 text-white px-8 py-2 rounded-full font-semibold text-lg'>
          Get started
        </button>
        <div className='bg-gradient-to-r from-blue-700 to-purple-500 p-1 rounded-full inline-block'>
          <button className='bg-[#0C0C0C] text-white px-8 py-1 rounded-full font-semibold text-lg'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
