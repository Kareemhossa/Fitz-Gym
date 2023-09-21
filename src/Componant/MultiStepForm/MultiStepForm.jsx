import { React, useState } from "react";
import StepFormControl from "./StepFormControl";
import StepForm from "./StepForm";
import PersonalInformation from "./Steps/PersonalInformation";
import FitnessGoals from "./Steps/FitnessGoals";
import Confirmation from "./Steps/Confirmation";

const MultiStepForm = () => {
  const [currentStep, useCurrentStep] = useState(1);
  const Steps = ["Personal Information", " Fitness Goals", "Confirmation"];

  const displayStep = (step) => {
    switch (step) {
      case "1":
        return <PersonalInformation />;
      case "2":
        return <FitnessGoals />;
      case "3":
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl bg-white ">
      {/*Step Form* */}
      <div className="container mt-10 mx-auto">
        <StepForm currentStep={currentStep} Steps={Steps} />
      </div>
      {/*Navigation Control* */}
      <div className="mx-auto">
        <StepFormControl />
      </div>
    </div>
  );
};

export default MultiStepForm;
