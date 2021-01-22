import { useStyles } from "./styles";
import { ConvertDateTime } from "../../../global/ConvertDateTime";
import { Box, Paper, Typography } from "@material-ui/core";

export const StatusSection = ({
  numberOfTeams,
  teamsSize,
  teamsSignedin,
  status,
  deadline,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.statusContainer}>
      {/*   Main Container that holds all Components   */}

      <Box component="div" className={classes.statusInfo}>
        {/*   Container that holds Status related Components   */}

        <Paper elevation={4} className={classes.statusPaper}>
          <Typography component="p" className={classes.statusTitle}>
            Status
          </Typography>
          <Typography component="p" className={classes.statusText}>
            {status}
          </Typography>
        </Paper>
        <Paper elevation={4} className={classes.statusPaper}>
          <Typography component="p" className={classes.statusTitle}>
            Vagas Disponíveis
          </Typography>
          <Typography component="p" className={classes.statusText}>
            {numberOfTeams}
          </Typography>
        </Paper>
        <Paper elevation={4} className={classes.statusPaper}>
          <Typography component="p" className={classes.statusTitle}>
            Prazo Limite de Inscrição
          </Typography>
          <Typography component="p" className={classes.statusText}>
            {ConvertDateTime(deadline)}
          </Typography>
        </Paper>
      </Box>

      <Box component="div" className={classes.teamsInfo}>
        {/*   Container that holds Components with Info of Teams   */}
        <Box component="div" className={classes.teamsInfoSize}>
          <Typography variant="h6" className={classes.teamsInfoTitle}>
            Tamanho das Equipes
          </Typography>

          <Typography component="p" className={classes.teamsInfoText}>
            {teamsSize}
          </Typography>
        </Box>

        <Box component="div" className={classes.teamsInfoTitle}>
          <Typography variant="h6" className={classes.teamsInfoTitle}>
            Equipes Inscritas
          </Typography>

          <Typography component="p" className={classes.teamsInfoText}>
            {teamsSignedin}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
