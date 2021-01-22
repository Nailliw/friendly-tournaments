import { useStyles } from "./styles";
import { Box, Button, Typography } from "@material-ui/core";

import { EditTournament } from "../../EditTournament/index";
import { SubscribeTeam } from "../../../local/TournamentInfo/SubscribeTeam/index";

export const TitleHeader = ({ tournamentData, isLogged }) => {
  const classes = useStyles();

  let isTournamentOwner = false;

  const { title } = tournamentData;
  const tournamentOwnerId = tournamentData.userId;

  const loggedUserId = JSON.parse(window.localStorage.getItem("users"))
    ?.loggedUser?.users?.id;

  // Verificação se o usuario logado é o dono do Torneio
  if (isLogged) {
    if (tournamentOwnerId === loggedUserId) {
      isTournamentOwner = true;
    }
  }

  return (
    <Box component="div" className={classes.titleHeader}>
      <Box component="div" className={classes.titleContainer}>
        <Typography
          variant="h1"
          component="h1"
          align="left"
          className={classes.mainTitle}
        >
          {title}
        </Typography>
      </Box>
      <Box component="div" className={classes.editButtonContainer}>
        {isTournamentOwner && (
          <Box>
            <EditTournament {...tournamentData} />
          </Box>
        )}
        {isLogged && (
          <Box className={classes.signinButtonContainer}>
            <SubscribeTeam tournamentId={tournamentData.id} />
            {/* <Button onClick={(e) => e} color="primary" variant="contained">
              Inscrever-se
            </Button> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};
