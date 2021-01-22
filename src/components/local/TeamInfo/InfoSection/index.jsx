import { useStyles } from "./styles";
import { Box, Typography, Chip } from "@material-ui/core";

import { IsValidState } from "./../../../global/IsValidState/index";

export const InfoSection = ({ teamData, playersData }) => {
  const classes = useStyles();

  const { teamInfo } = teamData;

  return (
    <Box component="div" className={classes.teamInfoContainer}>
      <Box component="div" className={classes.teamInfoDetails}>
        <Box component="div" className={classes.teamDetails}>
          <Typography variant="h4" className={classes.teamInfoDetailsTitle}>
            Informações do Time
          </Typography>

          <Typography className={classes.teamInfoDetailsText}>
            {teamInfo}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.teamInfoBox}>
        <Box component="div" className={classes.teamGameDetails}>
          <Box component="div" className={classes.teamGameInfo}>
            {IsValidState(playersData) &&
              playersData.map(({ firstName, lastName }) => {
                return (
                  <Chip
                    label={`${firstName} ${lastName}`}
                    color="default"
                    variant="default"
                    // size="small"
                  />
                );
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
