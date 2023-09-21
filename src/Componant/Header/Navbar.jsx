import { React, useState } from "react";
// import LOGO from "../../Assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggel, setToggel] = useState(false);

  const toggleHandle = () => {
    setToggel(!toggel);
  };
  return (
    <div className=" fixed top-0 z-50 w-full bg-[#1B262C] text-white h-[75px]  drop-shadow-xl">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-3">
        {/*<img src={LOGO} alt="" className="w-[50px] h-[40px]" />*/}
        <h1 className="text-3xl font-bold">Fitz gym </h1>

        <div className=" hidden md:flex items-center">
          <ul className="flex gap-4 font-semibold">
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/trainer"
              >
                Trainer
              </Link>
            </li>
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/ourheros"
              >
                Our Heros
              </Link>
            </li>
            <li>
              <Link
                className=" cursor-pointer hover:text-[#3282B8]"
                smooth={true}
                duration={500}
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button className="cursor-pointer hidden md:flex rounded-md bg-[#0F4C75] hover:bg-[#3282B8] px-3 py-2  shadow-md font-semibold">
          Join Now
        </button>
        <div onClick={toggleHandle} className="block md:hidden">
          {!toggel ? (
            <TiThMenuOutline className="cursor-pointer" size={25} />
          ) : (
            <IoClose className="cursor-pointer" size={25} />
          )}
        </div>
      </div>
      {/* menu bar in small screen */}
      <div
        className={
          toggel
            ? `md:hiddin fixed z-10 bg-[#0F4C75] p-4 px-8 w-full `
            : `hidden`
        }
      >
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-200  hover:bg-[#3282B8] cursor-pointer ">
            <Link smooth={true} duration={500} to="/">
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-200 hover:bg-[#3282B8]  cursor-pointer">
            <Link smooth={true} duration={500} to="/about">
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-200  hover:bg-[#3282B8] cursor-pointer">
            <Link smooth={true} duration={500} to="/trainer">
              Trainer
            </Link>
          </li>
          <li className="p-4 border-b border-gray-200 hover:bg-[#3282B8] cursor-pointer">
            <Link smooth={true} duration={500} to="/services">
              Services
            </Link>
          </li>
          <li className="p-4 border-b border-gray-200  hover:bg-[#3282B8] cursor-pointer">
            <Link smooth={true} duration={500} to="/ourheros">
              Our Heros
            </Link>
          </li>
          <li className="p-4  border-gray-200  hover:bg-[#3282B8] cursor-pointer">
            <Link smooth={true} duration={500} to="/contactus">
              Contact Us
            </Link>
          </li>
          <div className="flex flex-col my-4">
            <button className=" cursor-pointer rounded-md align-center bg-[#3282B8] px-3 py-2 shadow-md">
              Join Now
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
