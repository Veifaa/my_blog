const Header = () => {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="text-white text-3xl ml-3 cursor-pointer font-inter select-none flex items-center">
        <span className="text-white">Ve</span>
        <span className="text-purple-600 font-bold bg-gradient-to-r font-inter from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Q
        </span>
        <span className="text-white">tra</span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-gradient-to-r from-blue-900 to-purple-900 text-white px-8 py-2 rounded-full text-lg">
          Get started
        </button>
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-[2px] rounded-full inline-block">
          <button className="bg-[#080808] text-white px-8 py-2 rounded-full text-1xl hover:bg-inherit transition duration-400">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
