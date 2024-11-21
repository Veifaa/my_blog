import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from 'react-slick';

export const settings: Settings = {
  dots: true,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  pauseOnHover: true,
  variableWidth: true,
};
