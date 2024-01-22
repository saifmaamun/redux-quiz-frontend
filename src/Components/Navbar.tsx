import { Navbar, Typography } from "@material-tailwind/react";

export function NavbarDark() {
  return (
    <Navbar
      placeholder={""}
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 my-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          placeholder={""}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Quiz
        </Typography>
      </div>
    </Navbar>
  );
}
