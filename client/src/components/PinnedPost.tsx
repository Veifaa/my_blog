import { FC } from 'react';
import image from '../assets/Hello.webp';

export const Pinnedpost: FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#1b0c20] to-black p-6 rounded-xl mb-8">
      <div className="flex items-center mb-4">
        <h3 className="text-2xl font-inter mr-4 select-none opacity-80">
          Pinned
        </h3>
        <div className="flex-grow bg-gradient-to-r from-purple-950 to-transparent h-1 rounded-full relative">
          <p className="text-lg opacity-55 mt-3 select-none absolute top-[-1.5rem] right-0">
            11.09.2024
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="relative">
          <img
            src={image}
            alt="Post Image"
            className="rounded-sm w-60 h-80 object-cover border-1 border-purple-800 mt-1"
          />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h4 className="text-3xl text-white mt-1">Welcome to My Blog</h4>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              Hello, and thanks for stopping by! I'm Destruct, a dedicated C++
              developer with a passion for diving into the depths of code and
              unlocking the full potential of what C++ can offer. Here, I'll be
              sharing insights, tips, and projects that I hope will be valuable
              to fellow programmers, whether you're just starting out or have
              been coding for years.
            </p>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              In this space, expect deep dives into performance optimization,
              low-level programming techniques, and solutions to common (and
              not-so-common) challenges in C++. My goal is to create a place
              where we can explore the nuances of C++ together, learn new
              tricks, and push the boundaries of what's possible.
            </p>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              So, grab a coffee, settle in, and let's explore the world of C++!
            </p>
          </div>

          <div className="mt-4 self-end">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-[2px] rounded-full inline-block">
              <button className="bg-[#080808] text-white px-8 py-2 rounded-full text-1xl hover:bg-inherit transition duration-400 hover:shadow-[1px_1px_15px_10px_rgba(60,0,128,0.3)]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
