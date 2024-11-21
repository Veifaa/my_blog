import Slider from 'react-slick';
import NewsCard from './NewsCard';
import { settings } from '../../utils/SettingsSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderData } from '../../utils/tempDATA';
const SliderUi = () => {
  return (
    <div>
      <Slider {...settings}>
        {sliderData.map((data) => (
          <NewsCard key={data.id} title={data.title} text={data.text} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderUi;
