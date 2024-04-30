import React from 'react'
import { useRef } from "react";
import Layout from "../../layouts/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";


const ShopPageSlide = () => {
  const swiperRef = useRef();
  return (
    <>
      <Layout>
        <div className='ShopWrap'>
          <div className='ShopWrapInner'>
            <div className='Banner'>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  nextEl: ".slide-next",
                  prevEl: ".slide-prev",
                }}
                className="banner-slide"
              >
                <div className='BannerSlide'>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner1.svg"
                      className="banner1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner2.svg"
                      className="banner2"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner3.svg"
                      className="banner3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="../../images/main/banner4.svg"
                      className="banner4"
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div >
        </div >
      </Layout >
    </>
  )
}

export default ShopPageSlide