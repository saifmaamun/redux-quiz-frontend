import React from "react";
import { Button, Dialog, DialogBody, Spinner } from "@material-tailwind/react";
import { useGetAllQuizByModuleIdQuery } from "../redux/features/quiz/quizApi";

export function QuizModal({ moduleId }) {
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
          {quizes?.data?.map((quiz) => (
            <div className="flex justify-between">
              <p>{quiz.question}</p>
              <p>{quiz.description}</p>
            </div>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}
