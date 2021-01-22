import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles((theme) => ({
  primary: {
    color: '#ffff',
    backgroundColor: '#7033FF',
    margin: theme.spacing(1),
  },
}));


export default function Buttons(props) {
  const classes = useStyles();


  return (
      <Button onClick={props.onClick} variant={props.variant} color={"primary"} className={classes.primary} size={props.size}>
      {props.name}
      </Button>
  );
}