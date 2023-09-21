// import imge from "../../Assets/How to lose weight.png";
import React from "react";

const ResultData = ({ id, data }) => {
  return (
    <main className="border-4 border-white md:max-w-[700px]  ">
      <div className=" rounded-md drop-shadow-md md:h-[490px] ">
        <img
          key={id}
          src={data.img}
          alt="trainer"
          className="w-full md:h-full h-[300px]"
        />
      </div>
    </main>
  );
};

export default ResultData;
