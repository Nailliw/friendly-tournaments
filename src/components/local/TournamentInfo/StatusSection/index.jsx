import { useStyles } from "./styles";

import { Box, Paper, Typography } from "@material-ui/core";

export const StatusSection = ({
  numberOfTeams,
  teamsSize,
  teamsData,
  status,
  deadline,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.statusContainer}>
      <Box component="div" className={classes.statusInfo}>
        <Paper elevation={4} className={classes.statusPaper}>
          <Typography variant="p" component="p" className={classes.statusTitle}>
            Status
          </Typography>
          <Typography variant="p" component="p" className={classes.statusText}>
            {status}
          </Typography>
        </Paper>
        <Paper elevation={4} className={classes.statusPaper}>
          <Typography variant="p" component="p" className={classes.statusTitle}>
            Vagas Disponíveis
          </Typography>
          <Typography variant="p" component="p" className={classes.statusText}>
            {numberOfTeams}
          </Typography>
        </Paper>
        <Paper elevation={4} className={classes.statusPaper}>
          <Typography variant="p" component="p" className={classes.statusTitle}>
            Prazo Limite de Inscrição
          </Typography>
          <Typography variant="p" component="p" className={classes.statusText}>
            {deadline}
          </Typography>
        </Paper>
      </Box>
      <Box component="div" className={classes.teamsInfo}></Box>
    </Box>
  );
};
