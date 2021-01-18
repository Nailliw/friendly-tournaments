import { useState, useEffect } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@material-ui/core/";
import axios from "axios";
import EditUser from "../../components/local/EditUser/index";
import MemberOfTeams from "../../components/local/EditUser/MemberOfTeams";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/modules/users/thunk";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const URL_BASE = JSON.parse(window.localStorage.getItem("users"));

export const UserProfile = () => {
  const [personalinfo, setPersonalinfo] = useState(URL_BASE.loggedUser.users);
  const userData = useSelector((state) => state.loginUserThunk);
  console.log("userData", userData);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getPersonalInfo = () => {
    axios.get(URL_BASE).then((body) => {
      setPersonalinfo(body.data);
    });
  };

  useEffect(getPersonalInfo, []);

  return (
    <div>
      <div style={{ backgroundColor: "rgba(37,50,90,1)", height: "20vh" }}>
        Welcome, {personalinfo.nickName}
      </div>
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Perfil" {...a11yProps(0)} />
            <Tab label="Teams" {...a11yProps(1)} />
            <Tab label="Tournaments" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <EditUser
            id={personalinfo.id}
            firstName={personalinfo.firstName}
            lastName={personalinfo.lastName}
            bio={personalinfo.bio}
            email={personalinfo.email}
            invites={personalinfo.invites}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <MemberOfTeams data={personalinfo} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          {/* Aqui é o mesmo, uma função que faça um map no personalInfo.invites e pegue os Ids
          dos invites, com os ids consigo dar get nas infos */}
          Aqui são os campeonatos que ele participa
        </TabPanel>
      </div>
    </div>
  );
};
