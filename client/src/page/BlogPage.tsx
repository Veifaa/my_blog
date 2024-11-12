import React from 'react'
import { Post } from "../components/Post";
import { UserInfo } from '../components/UserInfo';

export const BlogPage = () => {
  return (
    <div className="min-h-screen p-8 text-white font-sans">
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        <UserInfo></UserInfo>
        <div className="lg:w-3/4 space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pinned</h3>
            <Post></Post>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Destruct posts</h3>
            <Post></Post>
          </div>
        </div>
      </div>
    </div>
  )
}
