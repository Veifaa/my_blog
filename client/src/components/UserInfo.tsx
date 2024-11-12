import React from 'react'

export const UserInfo = () => {
  return (
    <div className="lg:w-1/4 p-6 rounded-lg text-center relative ">
      {/* Вертикальная полоска */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-950 to-transparent rounded"></div>
      
      <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-semibold">destruct</h2>
      <p className="text-sm text-gray-300 mt-2">Hello, I'm Destruct – C++ Developer</p>
      <p className="mt-4 text-gray-400 text-sm">
        I'm an experienced C++ programmer with a passion for low-level coding and performance optimization.
        My focus is on building efficient, reliable solutions and writing clean, well-structured code. I believe in the importance of quality and security in every line I write, ensuring my code is both robust and optimized.
      </p>
    </div>
  )
}
