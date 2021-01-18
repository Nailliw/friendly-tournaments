import { Routes } from "./Routes";
import { CssBaseline } from "@material-ui/core";

import NavigationBar from "./components/global/navigationBar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavigationBar />
      <Routes />
    </>
  );
};

export default App;
