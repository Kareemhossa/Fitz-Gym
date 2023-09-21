import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the formData to your API or perform other actions.
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      name="/contactus"
      className="md:max-w-[1480px] max-w-[600px] m-auto w-full bg-[#1B262C] py-24"
    >
      <div className="grid md:grid-cols-2 gap-10 px-10">
        {/* Contact Information */}
        <div className="text-white flex flex-col  justify-between">
          <div>
            <h2 className="md:text-3xl text-3xl md:text-left text-center font-bold text-[#3282B8] pb-4">
              Get in Touch
            </h2>
            <p className="md:text-base  text-white max-w-[300] leading-normal font-normal pb-6 ">
              with our expert guidance, you can transfform your lifestyle and
              achieve optimal fitness through customized workout plans and
              tailored nutrition strategies
            </p>
          </div>
          <div className=" flex flex-col  text-white">
            <a
              href="tel:+2001000000001"
              className="flex items-center gap-4 pb-4 cursor-pointer"
            >
              <FaPhoneAlt size={30} className="hover:text-[#3282B8]" />
              <span> (+20) 01000 000 0001</span>
            </a>

            <a
              href="mailto:Gym@test.com"
              className="flex items-center gap-4 pb-4 cursor-pointer"
            >
              <MdEmail size={30} className="hover:text-[#3282B8]" />
              <span> FitzGym@test.com</span>
            </a>
            <a
              href="https://www.google.com/maps?q=1234+Elm+Street,+City,+Country"
              target="_blank"
              rel="noopener noreferrer" //for security best practices.
              className="flex items-center gap-4 pb-4 cursor-pointer"
            >
              <FaMapMarkerAlt size={30} className="hover:text-[#3282B8]" />
              <span>Address: 1234 Elm Street, City, Country</span>
            </a>
          </div>
          {/* Social Contact  */}
          <div className=" flex  text-white  gap-8 py-4  ">
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
        </div>

        {/* Contact Form */}
        <div className="flex flex-col">
          <h2 className="md:text-3xl text-3xl md:text-left text-center font-bold mb-6 text-white">
            Contact Us
          </h2>
          <form
            action="https://getform.io/f/c309b2d7-36cc-46e8-b680-1b30c9d1cadb"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#3282B8] text-white font-semibold rounded-md transition hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            duration={1000}
            className="text-white pt-4 cursor-pointer justify-end md:flex hidden hover:text-[#3282B8]"
          >
            <FaRegArrowAltCircleUp size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
