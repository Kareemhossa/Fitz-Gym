import React from "react";
import Slider from "react-slick";
import ServicesCard from "./ServicesCard";
import { data } from "../../Assets/DataServicCard.js";

const Services = () => {
  //plugin animation card to add it ****(npm install react-slick slick-carousel)****
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      name="/services"
      className="md:max-w-[1480px] max-w-[600px] m-auto w-full bg-[#3282B8] py-24 md:h-[700px] "
    >
      <div className="mx-10">
        <h1 className="md:text-5xl text-2xl font-bold text-white text-center md:pt-8 py-6">
          Featured Programs For You
        </h1>
        {/* ServicesCard is display a card for service */}
        <Slider {...settings}>
          {data.map((data, id) => (
            <ServicesCard key={id} data={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
