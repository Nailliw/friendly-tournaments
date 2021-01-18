import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  secondary: {
    color: '#ffff',
    backgroundColor: '#FF7843',
    margin: theme.spacing(1),
  },
}));


export default function Buttons(props) {
  const classes = useStyles();


  return (
      <Button onClick={props.onClick} variant={props.variant} color={"primary"} className={classes.secondary} size={props.size1}>
      {props.name}
      </Button>
  );
}