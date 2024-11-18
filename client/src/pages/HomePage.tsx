import { FC } from 'react';
import { Header } from '../components/Header';
import NewsCard from '../components/ui/NewsCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const HomePage: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <div className="flex"> </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
