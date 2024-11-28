import { FC } from 'react';
import Header from '../components/Header';
import Slider from '../components/ui/SliderUi';
import Footer from '../components/Footer';
const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex justify-center mt-20 mb-24">
          <h1 className="text-9xl font-inter">
            Ve
            <span className="font-inter text-purple-600 font-bold bg-gradient-to-r from-[#FB00FF] to-[#640FF5] text-transparent bg-clip-text">
              Q
            </span>
            tra
          </h1>
        </div>
        <div className="mx-48">
          <h1 className="text-[64px]">News</h1>
          <div className=" max-w-full h-[407px] mx-auto ">
            <Slider />
          </div>
        </div>
        <div className="rounded-[34px] flex items-center justify-center mb-20 mt-20 mx-48 bg-gradient-to-r from-[#1b0c20] to-black h-96">
          <div className="">
            <h1 className="text-center text-4xl">Create your blog</h1>
            <button
              className="mt-6 w-[306px] h-16 text-2xl text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-[31px]"
              type="button"
            >
              Get started
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
