import React from "react";
// import carido from "../../Assets/cardio.jpg";

const ServicesCard = ({ id, data: { img, title, discrption } }) => {
  return (
    <main className="  mx-8 md:pt-[60px] pt-5  ">
      <div
        key={id}
        className=" overflow-hidden rounded-2xl text-center bg-white drop-shadow-md transition delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-[#0F4C75] hover:text-white "
      >
        <img src={img} alt="" className=" w-full h-40 " />
        <div className="flex flex-col p-4  items-center">
          <h3 className="font-bold pt-2">{title} </h3>
          <p className="md:max-w-[750px] sm:max-w-[400] pt-2 leading-normal font-normal">
            {discrption}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServicesCard;
