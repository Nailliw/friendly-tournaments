import { Routes } from "./Routes";
import { CssBaseline, Box } from "@material-ui/core";

import NavigationBar from "./components/global/navigationBar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavigationBar />
      <Box className="app-content">
        <Routes />
      </Box>
    </>
  );
};

export default App;
