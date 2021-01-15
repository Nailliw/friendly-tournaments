import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  Button: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    margin: theme.spacing(1),
  },
}));


export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.Button} size={props.size}>
        {props.name}
      </Button>
    </div>
  );
}