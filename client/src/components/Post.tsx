import React from 'react'
import image from '../assets/Hello.webp'

export const Post = () => {
  return (
    <div className="bg-gradient-to-br from-main-purple to-black p-6 rounded-xl mb-8 shadow-[0_-30px_50px_rgba(128,0,128,0.3)]">
      <div className="flex gap-6">
        
        <div className="relative">
          <p className="text-2xl pt-4 opacity-55 absolute top-[-1.5rem] left-0">11.09.2024</p>
          <img src={image} alt="Post Image" className="rounded-lg w-60 h-80 object-cover border-2 border-purple-800 mt-8" />
        </div>
        
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h4 className="text-3xl text-white mt-8">Welcome to My Blog</h4>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              Hello, and thanks for stopping by! I'm Destruct, a dedicated C++ developer with a passion for diving into the depths of code and unlocking the full potential of what C++ can offer. Here, I'll be sharing insights, tips, and projects that I hope will be valuable to fellow programmers, whether you're just starting out or have been coding for years.
            </p>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              In this space, expect deep dives into performance optimization, low-level programming techniques, and solutions to common (and not-so-common) challenges in C++. My goal is to create a place where we can explore the nuances of C++ together, learn new tricks, and push the boundaries of what's possible.
            </p>
            <p className="mt-2 text-gray-200 text-sm leading-relaxed">
              So, grab a coffee, settle in, and let's explore the world of C++!
            </p>
          </div>
          

          <div className="mt-4 self-end">
            <button className="px-6 py-2 border-2 text-white border-purple-600 text-purple-600 rounded-full 
            font-semibold transition duration-200 hover:bg-gradient-to-r from-blue-700 to-purple-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
