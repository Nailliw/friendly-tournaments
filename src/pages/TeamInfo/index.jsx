import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { updateIsLoggedThunk } from "../../store/modules/users/thunk";
import { getTeamInfoThunk } from "../../store/modules/teams/thunk";

import { IsValidState } from "../../components/global/IsValidState/index";

import { LinearProgress, Box } from "@material-ui/core";
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
  }, [teamID, dispatch]);

  const teamData = useSelector(
    ({ TeamsReducer: { selectedTeam } }) => selectedTeam
  );

  const isLogged = useSelector(({ UsersReducer: { isLogged } }) => isLogged);

  return (
    <>
      {IsValidState(teamData) ? (
        <Box component="div" className={classes.teamInfoRoot}>
          <TitleHeader isLogged={isLogged} teamData={teamData} />
          <StatusSection teamData={teamData} />
          <InfoSection teamData={teamData} />
        </Box>
      ) : (
        <Box component="div" className={classes.tournamentInfoRoot}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};
