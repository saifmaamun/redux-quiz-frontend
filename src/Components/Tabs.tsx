/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { QuizCard } from "./QuizCard";
import { QuizStepper } from "./QuizStepper";
import { SelectModule } from "./SelectModule";
import { AddQuizForm } from "./AddQuizForm";
import { useGetAllModulesQuery } from "../redux/features/module/moduleApi";
import { QuizModal } from "./QuizModal";

export function TabsWithIcon() {
  const { data: modules, isLoading } = useGetAllModulesQuery("");
  console.log(modules?.data);
  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  }
  const steps = [
    {
      value: 0,
      name: "Select Module",
      component: (
        <div className="my-12 flex justify-center">
          <SelectModule />
        </div>
      ),
    },
    {
      value: 1,
      name: "Add Quiz",
      component: <AddQuizForm />,
    },
  ];
  const data = [
    {
      label: "Quiz List",
      value: "quiz-list",
      icon: Square3Stack3DIcon,
      desc: (
        <>
          {modules.data.map((module: any) => (
            <QuizCard>
              <Typography
                className="mb-3"
                placeholder={""}
                variant="h6"
                color="blue-gray"
              >
                {module.title}
              </Typography>
              <div className="flex justify-end">
                <QuizModal moduleId={module._id} />
              </div>
            </QuizCard>
          ))}
          ,
        </>
      ),
    },
    {
      label: "Add Quiz",
      value: "add-quiz",
      icon: UserCircleIcon,
      desc: (
        <QuizCard>
          <QuizStepper steps={steps} />
        </QuizCard>
      ),
    },
  ];
  return (
    <Tabs value="quiz-list">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
