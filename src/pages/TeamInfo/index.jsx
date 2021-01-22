import { useEffect } from "react";
import { useParams } from "react-router-dom";

// import { IsValidToken } from "../../components/global/IsValidToken";

import { useDispatch, useSelector } from "react-redux";

import { updateIsLoggedThunk } from "../../store/modules/users/thunk";
import { getTeamInfoThunk } from "../../store/modules/teams/thunk";

import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

import { TitleHeader } from "../../components/local/TeamInfo/TitleHeader";
import { StatusSection } from "../../components/local/TeamInfo/StatusSection";
import { InfoSection } from "../../components/local/TeamInfo/InfoSection";

export const TeamInfo = () => {
  const classes = useStyles();

  const { teamID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
    dispatch(getTeamInfoThunk(teamID));
  }, []);

  const teamData = useSelector(
    ({ TeamsReducer: { selectedTeam } }) => selectedTeam
  );
  console.log(teamData);

  const isLogged = useSelector(({ UsersReducer: { isLogged } }) => isLogged);

  return (
    <Box component="div" className={classes.tournamentInfoRoot}>
      <TitleHeader isLogged={isLogged} teamData={teamData} />
      <StatusSection teamData={teamData} />
      <InfoSection teamData={teamData} />
    </Box>
  );
};
