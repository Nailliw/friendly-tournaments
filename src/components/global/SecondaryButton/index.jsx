import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  secondary: {
    color: theme.palette.getContrastText('#FF7843'),
    backgroundColor: '#FF7843',
    margin: theme.spacing(1),
  },
}));


export default function Buttons({variant,size,name}) {
  const classes = useStyles();

  return (
    <div>
      <Button variant={variant} color={"primary"} className={classes.secondary} size={size}>
        {name}
      </Button>
    </div>
  );
}