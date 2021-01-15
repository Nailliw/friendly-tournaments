import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  primary: {
    color: theme.palette.getContrastText('#7033FF'),
    backgroundColor: '#7033FF',
    margin: theme.spacing(1),
  },
}));


export default function Buttons({variant,size,name,Color}) {
  const classes = useStyles();

  return (
    <div>
      <Button variant={variant} color={"primary"} className={classes.primary} size={size}>
        {name}
      </Button>
    </div>
  );
}