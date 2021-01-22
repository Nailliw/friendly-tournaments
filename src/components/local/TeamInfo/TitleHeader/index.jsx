import { useStyles } from "./styles";
import { Box, Button, Typography } from "@material-ui/core";

// import { EditTournament } from "../../EditTournament/index";

// import { IsValidToken } from "../../../global/IsValidToken";

export const TitleHeader = ({ teamData, isLogged }) => {
  const classes = useStyles();

  let isTeamOwner = false;

  const { teamName } = teamData;
  const isTeamOwnerId = teamData.userId;

  const loggedUserId = JSON.parse(window.localStorage.getItem("users"))
    ?.loggedUser?.users?.id;

  // Verificação se o usuario logado é o dono do Torneio
  if (isLogged) {
    if (isTeamOwnerId === loggedUserId) {
      isTeamOwner = true;
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
          {teamName}
        </Typography>
      </Box>
      <Box component="div" className={classes.editButtonContainer}>
        {isTeamOwner && (
          <Box>
            {/* <Button

              color="primary"
              variant="contained"
              className={classes.editButtonContainer}
            >
              Editar
            </Button> */}
            {/* <EditTournament {...teamData} /> */}
          </Box>
        )}
        {isLogged && (
          <Box className={classes.signinButtonContainer}>
            <Button onClick={(e) => e} color="primary" variant="contained">
              Inscrever-se
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
