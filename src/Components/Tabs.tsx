import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { QuizCard } from "./QuizCard";
import { QuizStepper } from "./QuizStepper";
import { SelectModule } from "./SelectModule";
import { AddQuizForm } from "./AddQuizForm";

export function TabsWithIcon() {
  const steps = [
    {
      value: 0,
      name: "Select Module",
      component: <SelectModule />,
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
      desc: <QuizCard>Quiz List</QuizCard>,
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
