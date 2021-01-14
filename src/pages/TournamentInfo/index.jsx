import { useStyles } from "./styles";

import { Box } from "@material-ui/core";

import { TitleHeader } from "../../components/local/TournamentInfo/TitleHeader";
import { StatusSection } from "../../components/local/TournamentInfo/StatusSection";

export const TournamentInfo = () => {
  const classes = useStyles();

  const tournamentData = {
    category: 10,
    title: "The International", // .done
    info: "The biggest esport event of the world!",
    numberOfTeams: 30,
    teamsSize: 5,
    teamsData: [
      {
        teamName: "LA Eagles",
        id: 2,
      },
      {
        teamName: "Miami Aligators",
        id: 3,
      },
    ],
    remainingTeams: [
      {
        teamName: "LA Eagles",
        id: 2,
      },
      {
        teamName: "Miami Aligators",
        id: 3,
      },
    ],
    matches: [],
    status: "Esperando Times",
    tournamentWinner: {},
    deadline: "2021-01-14T07:34",
    userId: 2,
    id: 2,
  };

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
    <Box component="div" className={classes.root}>
      <TitleHeader title={title} />
      <StatusSection
        numberOfTeams={numberOfTeams}
        teamsSize={teamsSize}
        teamsData={teamsData}
        status={status}
        deadline={deadline}
      />
    </Box>
  );
};
