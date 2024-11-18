import { Post } from '../components/Post';
import { UserInfo } from '../components/UserInfo';
import { Pinnedpost } from '../components/PinnedPost';
import { FC } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const BlogPage: FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 font-magra text-white">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <UserInfo></UserInfo>
          <div className="lg:w-3/4 space-y-4">
            <h3
              className="text-3xl font-inter bg-gradient-to-r from-[#1b0c20] to-transparent text-white py-4 px-4
         rounded-xl font-bold inline-block"
            >
              Destruct posts
            </h3>

            <div className="sticky">
              <Pinnedpost></Pinnedpost>
            </div>
            <div className="bg-gradient-to-r from-purple-950 to-transparent h-1 my-4 rounded-full"></div>
            <div>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
            <div className="w-600 h-700"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default BlogPage;
