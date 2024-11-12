import React from 'react'
import image from '../assets/Hello.webp'

export const Post = () => {
  return (
    <div className="bg-gradient-to-br from-black to-main-purple p-6 rounded-lg mb-8 shadow-[0_-30px_50px_rgba(128,0,128,0.3)]">
      <div className="flex gap-4">
        <img src={image} alt="Post Image" className="rounded-lg w-80 h-100 object-cover border-2 border-purple-600" />
        
        <div className="flex flex-col justify-between flex-1">
          <div>
            <p className="text-sm text-gray-400">11.09.2001</p>
            <h4 className="text-xl font-bold mt-1">Today I'm seeing a beautiful picture with IvanZolo</h4>
            <p className="mt-2 text-gray-200 text-sm">
              Today, I came across a hilarious moment that I couldn’t resist sharing. It’s one of those scenes that perfectly captures the spirit of someone who can make any situation feel a bit lighter...
            </p>
          </div>
          <div className="mt-4 text-right">
            <button className="text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold transition duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


