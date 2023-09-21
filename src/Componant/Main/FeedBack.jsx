import React from "react";
import Slider from "react-slick";

const FeedBack = () => {
  const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", // Replace with the actual image URL
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna bibendum, venenatis tellus eget, tincidunt tortor.",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80", // Replace with the actual image URL
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna bibendum, venenatis tellus eget, tincidunt tortor.",
    },
    {
      id: 3,
      name: "Jane Smith",
      photo:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80", // Replace with the actual image URL
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna bibendum, venenatis tellus eget, tincidunt tortor.",
    },
    {
      id: 4,
      name: "Jane Smith",
      photo:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80", // Replace with the actual image URL
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna bibendum, venenatis tellus eget, tincidunt tortor.",
    },
  ];

  //plugin animte card
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full bg-[#3282B8]  py-24 md:h-[600px]">
      <h2 className="md:text-5xl text-2xl font-bold text-white md:pt-6 py-2 text-center">
        Customer Feedback
      </h2>
      <p className="md:text-base text-center text-white sm:max-w-[400] leading-normal font-normal pb-6 px-4">
        Here's what our customers have to say about our products and services
      </p>
      <div className="md:mx-24">
        <Slider {...settings}>
          {feedbackData.map((feedback) => (
            <div key={feedback.id} className="w-full  p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={feedback.photo}
                  alt={feedback.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feedback.name}
                </h3>
                <p className="md:text-base md:text-center text-black sm:max-w-[400] leading-normal font-normal">
                  {feedback.feedback}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBack;
