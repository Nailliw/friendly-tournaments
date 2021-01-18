import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

export const InfoSection = ({ info }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.tournamentInfoContainer}>
      <Box component="div" className={classes.tournamentInfoDetails}>
        <Typography variant="h5" className={classes.tournamentInfoDetailsTitle}>
          Informações do Torneio
        </Typography>

        <Typography className={classes.tournamentInfoDetailsText}>
          {info}
        </Typography>
      </Box>
      <Box component="div" className={classes.tournamentInfoBox}>
        WIP: Card de Times ou Partidas Aqui
      </Box>
    </Box>
  );
};
