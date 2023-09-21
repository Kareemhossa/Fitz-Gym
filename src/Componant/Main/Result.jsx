import React from "react";
import ResultData from "./ResultData";
import { data } from "../../Assets/DataResultCard";
import Slider from "react-slick";

const Result = () => {
  //plugin animation card to add it ****(npm install react-slick slick-carousel)****
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      <div
        name="/ourheros"
        className=" md:max-w-[1480px] max-w-[600px] w-full bg-[#1A3B51]  grid md:grid-cols-2 gap-6 m-auto h-[700px] p-8  "
      >
        <Slider {...settings} className="custom-slider ">
          {data.map((data, id) => (
            <ResultData key={id} data={data} />
          ))}
        </Slider>
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="md:text-3xl text-xl font-bold text-[#3282B8] py-5">
            Built to Bring Best Results
          </h1>
          <p className="md:text-base text-white md:max-w-[700px] sm:max-w-[400] text-center sm:text-sm leading-normal font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </>
  );
};

export default Result;
