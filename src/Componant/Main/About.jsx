import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { FaHeartbeat, FaClipboardList } from "react-icons/fa";
import { RxVideo } from "react-icons/rx";

const About = () => {
  return (
    <div
      name="/about"
      className="md:max-w-[1480px] max-w-[600px] m-auto w-full flex flex-col justify-center items-center bg-[#1B262C]  py-24"
    >
      <div className="flex flex-col items-center text-center py-14  w-full bg-[#1a3b51]">
        <h1 className="md:text-6xl text-2xl font-bold text-[#3282B8] ">
          Push your limits forward
        </h1>
        <p className=" text-white  md:text-xl md:max-w-[700px] sm:max-w-[400] p-6 leading-normal font-normal">
          with our expert guidance, you can transfform your lifestyle and
          achieve optimal fitness through customized workout plans and tailored
          nutrition strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-4  mx-4 justify-between items-center gap-4 pt-24">
        <div className=" flex flex-col  p-4 m-2 items-center rounded-md text-center bg-white transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-[#0F4C75] hover:text-white ">
          <CiDumbbell size={40} className="m-2 font-bold" />
          <h3 className="font-bold pt-4">Quality Equipment </h3>
          <p className="md:max-w-[750px] sm:max-w-[400] pt-2 leading-normal font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col  p-4 m-2 items-center rounded-md text-center bg-white transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-[#0F4C75] hover:text-white">
          <FaHeartbeat size={40} className="m-2 font-bold" />
          <h3 className="font-bold pt-4">Workout Programme </h3>
          <p className="md:max-w-[750px] sm:max-w-[400] pt-2 leading-normal font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col  p-4 m-2 items-center rounded-md text-center bg-white transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-[#0F4C75] hover:text-white">
          <RxVideo size={40} className="m-2 font-bold" />
          <h3 className="font-bold pt-4">videos </h3>
          <p className="md:max-w-[750px] sm:max-w-[400] pt-2 leading-normal font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col  p-4 m-2 items-center rounded-md text-center bg-white transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-[#0F4C75] hover:text-white">
          <FaClipboardList size={40} className="m-2 font-bold" />
          <h3 className="font-bold pt-4">Healthy Nutrition Plan</h3>
          <p className="md:max-w-[750px] sm:max-w-[400] pt-2 leading-normal font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
