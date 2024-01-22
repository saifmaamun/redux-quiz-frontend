import { Toaster } from "react-hot-toast";
import { NavbarDark } from "./Components/Navbar";
import { TabsWithIcon } from "./Components/Tabs";

function App() {
  return (
    <div className="mx-auto container">
      <NavbarDark />
      <TabsWithIcon />
      <Toaster />
    </div>
  );
}

export default App;
