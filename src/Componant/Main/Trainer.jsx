import React from "react";
import trainer from "../../Assets/trainer.jpg";

const Trainer = () => {
  return (
    <div
      name="/trainer"
      className=" md:max-w-[1480px] max-w-[600px] w-full md:h-[800px] grid md:grid-cols-2 m-auto  bg-[#1A3B51] "
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className="md:text-5xl text-2xl font-bold text-[#3282B8] py-6">
          Why Choose Me ?
        </h1>
        <p className="md:text-base text-white md:max-w-[700px] sm:max-w-[400] p-4 md:text-left text-center leading-normal font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className=" md:text-base text-white md:max-w-[700px] sm:max-w-[400] p-4 md:text-left text-center leading-normal font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="w-full ">
        <img src={trainer} alt="trainer" className=" md:h-[800px] w-full" />
      </div>
    </div>
  );
};

export default Trainer;
