import { useStyles } from "./styles";

import { Box, Typography } from "@material-ui/core";

export const StatusSection = ({ teamData }) => {
  const classes = useStyles();
  const { playersId, tournamentsWon, tournamentsDisputed } = teamData;

  return (
    <Box component="section" className={classes.statusContainer}>
      {/*   Main Container that holds all Components   */}

      <Box component="div" className={classes.teamsInfo}>
        {/*   Container that holds Components with Info of the Team  */}
        <Box component="div" className={classes.teamsInfoSize}>
          <Typography variant="h6" className={classes.teamsInfoTitle}>
            Número de Jogadores
          </Typography>

          <Typography component="p" className={classes.teamsInfoText}>
            {playersId?.length}
          </Typography>
        </Box>

        <Box component="div" className={classes.teamsInfoTitle}>
          <Typography variant="h6" className={classes.teamsInfoTitle}>
            Número de Torneios Ganhos{" "}
          </Typography>

          <Typography component="p" className={classes.teamsInfoText}>
            {tournamentsWon?.length}
          </Typography>
        </Box>
        <Box component="div" className={classes.teamsInfoTitle}>
          <Typography variant="h6" className={classes.teamsInfoTitle}>
            Número de Torneios que Participou{" "}
          </Typography>

          <Typography component="p" className={classes.teamsInfoText}>
            {tournamentsDisputed?.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
