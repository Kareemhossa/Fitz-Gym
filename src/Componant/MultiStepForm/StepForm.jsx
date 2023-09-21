import React from "react";

const StepForm = ({ Steps, currentStep }) => {
  const displySteps = (
    <div className="w-full flex items-center">
      <div className="relative flex flex-col items-center ">
        {/**description */}
        <div className=" flex rounded-full w-10 h-10 py-3 border-2 text-[#3282B8] border-[#3282B8] justify-center items-center font-semibold transition duration-500 ease-in-out">
          1
        </div>
        <div className="absolute top-0 w-32 mt-12 text-center text-[#3282B8] text-xs font-semibold uppercase ">
          Personal Information
        </div>
      </div>
      <div className="flex-auto border-t-4 border-[#3282B8] mx-auto transition duration-500 ease-in-out ">
        {/**line */}
      </div>
    </div>
  );
  return (
    <div className=" w-full flex items-center justify-between py-6 px-10 mx-4">
      {displySteps}
    </div>
  );
};

export default StepForm;
