import React from "react";
import land from "../../Assets/land.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SectionHeder = () => {
  return (
    <div name="/" className="w-full bg-white ">
      <div className="relative md:max-w-[1480px] max-w-[600px] m-auto border border-black h-[100vh] justify-center items-center">
        <img src={land} alt="/" className="w-full object-cover h-full" />
        {/* Info in Middle  */}
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center pt-26  ">
          <h1 className="md:text-6xl text-3xl font-bold text-[#3282B8] ">
            Elevate your fitness and nutritios journey
          </h1>
          <p className="md:text-xl text-white md:max-w-[700px] sm:max-w-[400] pt-4 leading-normal font-normal">
            with our expert guidance, you can transfform your lifestyle and
            achieve optimal fitness through customized workout plans and
            tailored nutrition strategies.
          </p>
          <button className="mt-[2rem]  rounded-md bg-[#0F4C75] hover:bg-[#3282B8] text-white px-5 py-3  font-semibold">
            Get Start
          </button>
        </div>
        {/* Info and social icons */}
        <div className=" flex  justify-between items-center md:h-[120px] md:mt-[-120px] mt-[-60px] m-auto z-10 relative  ">
          {/* left*/}
          <div className="hidden md:flex  items-center text-white  gap-8 pl-10 ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={30}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-115 hover:text-[#3282B8] cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-115 hover:text-[#3282B8] cursor-pointer "
              />
            </a>

            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-115 hover:text-[#3282B8] cursor-pointer"
              />
            </a>
          </div>
          {/* Right*/}
          <div className="bg-[#3282B8] flex  justify-around items-center rounded-sm w-full md:w-[50%]  h-[70px] md:h-full text-center  md:mt-0">
            <div className="text-center md:text-left">
              <h1 className="font-bold">+588</h1>
              <p className="font-normal">Happy Client</p>
            </div>
            <div className="text-center md:text-left ">
              <h1 className="font-bold">+588</h1>
              <p className="font-normal">Happy Client</p>
            </div>
            <div className="text-center md:text-left ">
              <h1 className="font-bold">+588</h1>
              <p className="font-normal">Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeder;
