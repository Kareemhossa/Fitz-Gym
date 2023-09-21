import React from "react";

const StepFormControl = () => {
  return (
    <div className="container flex justify-around py-8 ">
      <button
        className="border-2 border-[#3282B8] hover:bg-[#3282B8] hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-[8px]
         drop-shadow-sm transition duration-300 ease-in-out "
        type="button"
      >
        Back
      </button>
      <button
        className="bg-[#3282B8] hover:bg-[#0F4C75] text-white font-semibold py-2 px-4 rounded-[8px] drop-shadow-sm 
        transition duration-300 ease-in-out "
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default StepFormControl;
