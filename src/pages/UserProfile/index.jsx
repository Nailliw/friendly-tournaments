import { useState, useEffect } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@material-ui/core/";
import axios from "axios";
import EditUser from "../EditUser/index";
import MemberOfTeams from "../../components/global/MemberOfTeams";

import { useSelector, useDispatch } from "react-redux";

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

const URL_BASE = "http://localhost:3001/users/1";

export const UserProfile = () => {
  const [personalinfo, setPersonalinfo] = useState([]);
  const [value, setValue] = useState(0);
  const selectedUser = useSelector((state) => state.SelectedUserReducer);

  console.log("loggedUser", selectedUser);

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
            firstName={personalinfo.firstName}
            lastName={personalinfo.lastName}
            bio={personalinfo.bio}
            email={personalinfo.email}
            invites={personalinfo.invites}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Aqui eu preciso de uma função que faça um map no personalInfo.memberOfTeams e pegue os IDs
          dos times, com o ID eu posso dar um get nas infos dos times. */}
          <MemberOfTeams
            firstName={personalinfo.firstName}
            lastName={personalinfo.lastName}
          />
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
