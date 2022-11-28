import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";

const HomeCarousel = () => {
  const banners = useSelector((state) => {
    return state.booking.banners;
  });
  return (
    <div>
      <Carousel autoplay>
        {banners.map((item) => {
          return (
            <div key={item.maPhim}>
              <img
                className="w-full h-100 object-fit"
                src={item.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
