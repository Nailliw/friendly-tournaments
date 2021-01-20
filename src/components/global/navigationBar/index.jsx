import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper ,Box } from "@material-ui/core";
import 'fontsource-roboto';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import CustonMenu from "./Menu/index";
import { useHistory } from "react-router-dom";
import { IsValidToken } from '../IsValidToken/index'
import { LoginPopup } from '../Login/index'
import { RegisterUserPopup } from '../Register/User/index'

export default function NavigationBar() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [isLogged,setIsLogged] = useState(IsValidToken());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };

    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <List>
          <ListItem
            autoFocus
            button
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <Box component="div" className={classes.navBarContainer}>

      <Box component="div" className={classes.navBarLeft}>
      <Box component="div" className={classes.logo}>
      <div onClick={() => history.push("/")}>Logo</div>
      </Box>
      <Box component="div" className={classes.buttonsLeft}>
      <Typography variant="button" onClick={() => history.push("/tournaments")} className={classes.buttons}>Tournaments</Typography>
      <Typography variant="button" onClick={() => history.push("/teams")} className={classes.buttons}>Times</Typography>
      </Box>
      </Box>

      <Box component="div" className={classes.navBarRight}>
      <Box component="div" className={classes.buttonsRight}>
        {LoginPopup()}       
        {RegisterUserPopup()}
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Box>
      <Box component="div" className={classes.menu}>
       {isLogged && <CustonMenu name1="Ver Prefil" onClick1={() => history.push("/users/:userID")} name2="Deslogar" />}
      </Box>
    </Box>
    
    </Box>
  );
}
