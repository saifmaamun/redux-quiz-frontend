import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";

import { setSelectedModule } from "../redux/features/module/moduleSlice";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { useGetAllModulesQuery } from "../redux/features/module/moduleApi";

export function SelectModule() {
  const dispatch = useAppDispatch();

  const { data: modules, isLoading, isError } = useGetAllModulesQuery("");
  console.log(isLoading, isError);

  if (isLoading) {
    return (
      <div>
        <Spinner className="flex justify-center h-full " />
      </div>
    );
  }
  return (
    <div className="w-72 my-20">
      <Select
        className=""
        onChange={(value) => {
          const moduleTitle = modules.data.find(
            (module: { _id: string | undefined }) => module._id === value
          ).title;
          dispatch(
            setSelectedModule({
              moduleTitle,
              moduleId: value,
            })
          );
          dispatch(setActiveStep(1));
        }}
        placeholder={""}
        label="Select Moule"
      >
        {modules?.data.map(
          (module: {
            _id: string | undefined;
            title:
              | string
              | number
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          }) => (
            <Option value={module._id}>{module.title}</Option>
          )
        )}
      </Select>
    </div>
  );
}
