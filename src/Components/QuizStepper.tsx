import React from "react";
import { Stepper, Step } from "@material-tailwind/react";

export function QuizStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        <Step
          placeholder={""}
          onClick={() => setActiveStep(0)}
          className="px-8 w-fit"
        >
          Quiz List
        </Step>
        <Step
          placeholder={""}
          onClick={() => setActiveStep(1)}
          className="px-8 w-fit"
        >
          Add Quiz
        </Step>
      </Stepper>
      <div className="mt-16 flex justify-between"></div>
    </div>
  );
}
