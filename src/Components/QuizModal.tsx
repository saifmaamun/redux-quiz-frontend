import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useGetAllQuizByModuleIdQuery } from "../redux/features/quiz/quizApi";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentQuestionIndex } from "../redux/features/quiz/quizSlice";

export function QuizModal({ moduleId }) {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex } = useAppSelector((state) => state.quiz);
  const { data: quizes, isLoading } = useGetAllQuizByModuleIdQuery(moduleId);
  console.log(quizes);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Button placeholder={""} onClick={handleOpen} variant="gradient">
        Start Quiz
      </Button>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogBody placeholder={""}>
          {quizes?.data?.map(
            (quiz: any, index: number) =>
              currentQuestionIndex === index && (
                <Typography className="mb-4" variant="h5" placeholder={""}>
                  {quiz.question}
                </Typography>
              )
          )}
          <div className="grid grid-cols-2 gap-4 ">
            {quizes?.data[currentQuestionIndex]?.options.map((option: any) => (
              <Button
                placeholder={""}
                variant={
                  (quizes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    "filled") ||
                  "gradient"
                }
                color={
                  (quizes?.data[currentQuestionIndex]?.correctOption ===
                    option &&
                    "green") ||
                  "amber"
                }
              >
                {option}
              </Button>
            ))}
          </div>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <div className="flex justify-end space-x-4">
            {currentQuestionIndex > 0 && (
              <Button
                onClick={() =>
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1))
                }
                placeholder={""}
                variant="gradient"
              >
                Previous
              </Button>
            )}
            {(quizes.data.length - 1 > currentQuestionIndex && (
              <Button
                onClick={() =>
                  dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
                }
                placeholder={""}
                variant="gradient"
              >
                Next
              </Button>
            )) || (
              <Button placeholder={""} variant="gradient">
                Submit
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
