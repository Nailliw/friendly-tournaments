import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateIsLoggedThunk } from "../../../store/modules/users/thunk";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Box, AppBar } from "@material-ui/core";
import "fontsource-roboto";
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
import { IsValidToken } from "../IsValidToken/index";
import { LoginPopup } from "../Login/index";
import { RegisterUserPopup } from "../Register/User/index";

export default function NavigationBar() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const state = useSelector((state) => state);
  const isLogged = state.UsersReducer.isLogged;
  const dispatch = useDispatch();

  console.log(isLogged);

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

  const handleLoggout = () => {
    localStorage.clear();
    dispatch(updateIsLoggedThunk());
  };

  return (
    <AppBar>
      <Box component="div" className={classes.navBarContainer}>
        <div className={classes.navBarLeftSide}>
          <Box component="div" className={classes.logo}>
            <div onClick={() => history.push("/")}>Logo</div>
          </Box>
          <Box component="div" className={classes.buttonsLeft}>
            <Typography
              variant="subtitle2"
              onClick={() => history.push("/tournaments")}
              className={classes.buttons}
            >
              Tournaments
            </Typography>
            <Typography
              variant="subtitle2"
              onClick={() => history.push("/teams")}
              className={classes.buttons}
            >
              Times
            </Typography>
          </Box>
        </div>
        {isLogged !== true ? (
          <div className={classes.navBarRightSide}>
            <Box component="div" className={classes.buttons}>
              {LoginPopup()}
            </Box>
            <Box component="div" className={classes.buttons}>
              {RegisterUserPopup()}
            </Box>
          </div>
        ) : (
          <div className={classes.navBarRightSide}>
            <Box component="div" className={classes.menu}>
              <CustonMenu
                name1="Ver Perfil"
                onClick={() => history.push("/users/:userID")}
                name2="Deslogar"
                onClick2={handleLoggout}
              />
            </Box>
          </div>
        )}
      </Box>
    </AppBar>
  );
}
