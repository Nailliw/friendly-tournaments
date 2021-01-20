import { useStyles } from "./styles";
import { Box, Typography, Chip } from "@material-ui/core";
import { CardMessages } from "../../../global/CardMessages/index";
import { IsValidState } from "../../../global/IsValidState";

export const InfoSection = ({ info, gameName, teamsSize, tournamentId }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.tournamentInfoContainer}>
      <Box component="div" className={classes.tournamentInfoDetails}>
        <Box component="div" className={classes.tournamentDetails}>
          <Typography
            variant="h5"
            className={classes.tournamentInfoDetailsTitle}
          >
            Informações do Torneio
          </Typography>

          <Typography className={classes.tournamentInfoDetailsText}>
            {info}
          </Typography>
        </Box>
        <Box component="div" className={classes.tournamentGameDetails}>
          <Box component="div" className={classes.tournamentGameInfo}>
            <Chip
              label={gameName}
              clickable
              color="secondary"
              variant="outlined"
              // size="small"
            />
            <Chip
              label={`${teamsSize} v ${teamsSize}`}
              clickable
              color="secondary"
              variant="outlined"
              // size="small"
            />
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.tournamentInfoBox}>
        <Box component="div" className={classes.tournamentInfoContent}>
          {IsValidState(tournamentId) && (
            <CardMessages tournamentId={tournamentId} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
