import React from 'react'
import { Post } from "../components/Post";
import { UserInfo } from '../components/UserInfo';

export const BlogPage = () => {
  return (
    <div className="min-h-screen p-8 font-magra text-white font-sans">
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        <UserInfo></UserInfo>
        <div className="lg:w-3/4 space-y-12">
          <div>
            <h3 className="text-3xl font-inter mb-4">Pinned</h3>
            <Post></Post>
          </div>
          <div className="bg-gradient-to-r from-purple-950 to-transparent rounded h-1 my-4 rounded-full"></div>
          <div>
            <h3 className="text-3xl font-inter mb-4">Destruct posts</h3>
            <Post></Post>
          </div>
          <div className='w-600 h-700'></div>
        </div>
      </div>
    </div>
  )
}
