import { useStyles } from "./styles";

import { Box, Button, Typography } from "@material-ui/core";

export const TitleHeader = ({ title }) => {
  const classes = useStyles();

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
      <Box component="div" className={classes.signinButtonContainer}>
        <Button color="primary" variant="contained" disabled={false}>
          Inscrever-se
        </Button>
      </Box>
    </Box>
  );
};
