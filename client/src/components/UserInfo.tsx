import { FC } from 'react';

export const UserInfo: FC = () => {
  return (
    <div className="lg:w-1/4 p-6 rounded-lg text-center relative ">
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-950 to-transparent rounded"></div>

      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold">destruct</h2>
      <p className="text-sm text-gray-300 mt-2">
        Hello, I'm Destruct – C++ Developer
      </p>
      <p className="mt-4 text-gray-400 text-sm">
        I'm an experienced C++ programmer with a passion for low-level coding
        and performance optimization. My focus is on building efficient,
        reliable solutions and writing clean, well-structured code. I believe in
        the importance of quality and security in every line I write, ensuring
        my code is both robust and optimized.
      </p>

      <div className="bg-gradient-to-r mt-6 from-[#492055] to-[#110250] p-[2px] rounded-full inline-block">
        <button className="bg-[#080808] text-white py-2 px-11 rounded-full text-1xl hover:bg-inherit transition duration-400">
          Profile
        </button>

        <button className="bg-[#080808] text-white px-8 ml-24 py-2 rounded-full text-1xl hover:bg-inherit transition duration-400">
          Subscribe
        </button>
      </div>
    </div>
  );
};
