import React from 'react';
import Login from '../assets/login.webp';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen font-inter text-white">
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-cover bg-center relative">
        <img
          src={Login}
          alt="Login Image"
          className="h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-5xl font-bold font-inter text-center">Welcome to Ve
            <span className='"text-lg font-bold bg-gradient-to-r font-inter from-blue-500 to-purple-600 text-transparent bg-clip-text'>Q</span>
            tra</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
        <div className="bg-[#1b1b1b00] rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-semibold font-inter text-center mb-10">Sign Up to VeQtra</h2>
          <div className="flex flex-col space-y-4 mb-4">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-[2px] rounded-full inline-block w-full">
              <button className="bg-[#080808] text-white w-full py-2 rounded-full text-lg flex items-center justify-center gap-3 hover:bg-inherit transition duration-300 hover:shadow-[1px_1px_15px_10px_rgba(60,0,128,0.3)]">
                  <img
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt="Google Logo"
                  className="w-6 h-6"/>
                  Log in with Google
              </button>
            </div>

            <div className="bg-gradient-to-r mt-8 from-blue-900 to-purple-900 h-1 my-4 rounded-full"></div>
          </div>

          <form className="space-y-4 mt-8">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 font-inter bg-[#2C2C2C] rounded-full focus:outline-none duration-300 focus:ring-2 focus:ring-[#520172]"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 font-inter bg-[#2C2C2C] rounded-full focus:outline-none duration-300 focus:ring-2 focus:ring-[#520172]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#2C2C2C] font-inter rounded-full focus:outline-none duration-300 focus:ring-2 focus:ring-[#520172]"
            />
            <div className="flex flex-col space-y-4 mb-2">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-[2px] rounded-full inline-block w-full">
                  <button className="bg-[#080808] text-white w-full py-2 rounded-full text-lg hover:bg-inherit transition duration-300 hover:shadow-[1px_1px_15px_10px_rgba(60,0,128,0.3)]">
                  Sign up
                  </button>
              </div>
            </div>
          </form>

          <div className="flex justify-between text-sm text-gray-400 mt-4">
            <a href="#" className="hover:underline font-inter">Forgot password?</a>
            <a href="#" className="hover:underline font-inter">Sign up for VeQtra</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
