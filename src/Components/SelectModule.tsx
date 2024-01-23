import { Select, Option, Spinner } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStep } from "../redux/features/stepper/stepperSlice";
import { useGetAllModulesQuery } from "../redux/api/baseApi";
import { setSelectedModule } from "../redux/features/module/moduleSlice";

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
            (module) => module._id === value
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
        {modules?.data.map((module) => (
          <Option value={module._id}>{module.title}</Option>
        ))}
      </Select>
    </div>
  );
}
