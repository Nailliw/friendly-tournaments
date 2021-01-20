import { useStyles } from "./styles";

import { Box, Button, Typography } from "@material-ui/core";

export const TitleHeader = ({ title, isLogged }) => {
  const classes = useStyles();
  console.log(isLogged);
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
          <Button
            color="primary"
            variant="contained"
            disabled={!isLogged}
            className={classes.editButtonContainer}
          >
            Editar
          </Button>
        </Box>
        <Box className={classes.signinButtonContainer}>
          <Button color="primary" variant="contained" disabled={!isLogged}>
            Inscrever-se
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
