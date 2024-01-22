import React, { ReactNode } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: ReactNode;
  }[];
};

export function QuizStepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {steps.map((step) => (
          <Step
            placeholder={""}
            onClick={() => dispatch(setActiveStep(step.value))}
            className="px-8 w-fit"
          >
            {step.name}
          </Step>
        ))}
      </Stepper>
      <div>{steps[activeStep].component}</div>
      <div className="mt-16 flex justify-between"></div>
    </div>
  );
}
