import { useStyles } from "./styles";
import { Box, Button, Typography } from "@material-ui/core";

// import { IsValidToken } from "../../../global/IsValidToken";

export const TitleHeader = ({ title, tournamentOwnerId, isLogged }) => {
  const classes = useStyles();

  let isTournamentOwner = false;

  const loggedUserId = JSON.parse(window.localStorage.getItem("users"))
    ?.loggedUser.users.id;

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
        <Box>
          {isTournamentOwner && (
            <Button
              onClick={(e) => e}
              color="primary"
              variant="contained"
              className={classes.editButtonContainer}
            >
              Editar
            </Button>
          )}
        </Box>
        <Box className={classes.signinButtonContainer}>
          {isLogged && (
            <Button onClick={(e) => e} color="primary" variant="contained">
              Inscrever-se
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
