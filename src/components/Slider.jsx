// Import Swiper styles
import styled from 'styled-components';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import { Wrapper } from './Wrapper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <StyledSlider>
      <Wrapper>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='mySwiper'
        >
          <SwiperSlide>
            <figure className='ImageWrapper'>
              <img
                className='imageSlide'
                src='https://conpochoclos.com/wp-content/uploads/2021/09/RED-NOTICE.jpg'
                alt='Banner Red Notice'
                title='Banner Red Notice'
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className='ImageWrapper'>
              <img
                className='imageSlide'
                src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/shang-chi-ending-explained.jpg'
                alt='Banner Shang shi'
                title='Banner Shang shi'
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className='ImageWrapper'>
              <img
                className='imageSlide'
                src=' https://9to5fortnite.com/wp-content/uploads/2021/09/Thumbnail_Ez4GYS0.jpg'
                alt='Banner Venon'
                title='Banner Venon'
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </StyledSlider>
  );
};

const StyledSlider = styled.section`
  .imageSlide {
    width: 100%;
    object-fit: cover;
    object-position: top;
    max-height: 600px;
  }

  .ImageWrapper {
    position: relative;
  }

  .ImageWrapper::after {
    position: absolute;
    content: '';

    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      to bottom,
      hsl(246, 24%, 7%, 0) 20%,
      hsl(246, 24%, 7%) 100%
    );
  }
  .ImageWrapper::before {
    position: absolute;
    content: '';

    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      to top,
      hsl(246, 24%, 7%, 0) 85%,
      hsl(246, 24%, 7%) 100%
    );
  }
`;

export default Slider;
