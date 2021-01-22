import { useEffect } from "react";
import { useParams } from "react-router-dom";

// import { IsValidToken } from "../../components/global/IsValidToken";

import { useDispatch, useSelector } from "react-redux";

import { updateIsLoggedThunk } from "../../store/modules/users/thunk";
import { getTournamentInfoThunk } from "../../store/modules/tournaments/thunk";

import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

import { TitleHeader } from "../../components/local/TournamentInfo/TitleHeader";
import { StatusSection } from "../../components/local/TournamentInfo/StatusSection";
import { InfoSection } from "../../components/local/TournamentInfo/InfoSection";

export const TournamentInfo = () => {
  const classes = useStyles();

  const { tournamentID } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
    dispatch(getTournamentInfoThunk(tournamentID));
  }, []);

  const tournamentData = useSelector(
    ({ TournamentsReducer: { selectedTournament } }) => selectedTournament
  );

  const {
    title,
    info,
    numberOfTeams,
    teamsSize,
    teamsData,
    status,
    deadline,
  } = tournamentData;

  return (
    <Box component="div" className={classes.tournamentInfoRoot}>
      <TitleHeader title={title} />
      <StatusSection
        numberOfTeams={numberOfTeams}
        teamsSize={teamsSize}
        teamsSignedin={teamsData?.length}
        status={status}
        deadline={deadline}
      />
      <InfoSection info={info} />
    </Box>
  );
};
