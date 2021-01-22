import React, { useEffect, useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIsLoggedThunk,
  logoutThunk,
} from "../../../store/modules/users/thunk";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Box } from "@material-ui/core";
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
import { Typography, AppBar } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { useStyles } from "./styles";
import CustonMenu from "./Menu/index";
import MenuMobile from "./MenuMobile/index";
import { useHistory } from "react-router-dom";
import { IsValidToken } from "../IsValidToken/index";
import { LoginPopup } from "../Login/index";
import { RegisterUserPopup } from "../Register/User/index";
import { RegisterTeamPopup } from "../Register/Team/index";
import { RegisterTournamentPopup } from "../Register/Tournament/index";
import { IsValidState } from "../IsValidState";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function NavigationBar() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const isLogged = useSelector((state) => state.UsersReducer.isLogged);
  const dispatch = useDispatch();
  const [loggedUserId, setLoggedUserId] = useState("");
  const mobile = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
    console.log(loggedUserId);
  }, []);

  useEffect(() => {
    if (isLogged) {
      setLoggedUserId(
        JSON.parse(window.localStorage.getItem("users")).loggedUser.users.id
      );
    }
  }, [isLogged]);

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
    dispatch(logoutThunk());
    history.push("/");
  };

  return (
    <AppBar style={{ height: "6vh", width: "100%" }}>
      <Box component="div" className={classes.navBarContainer}>
        <Box componet="div" className={classes.navBarLeftSide}>
          <Box component="div" className={classes.logo}>
            <Box component="div" onClick={() => history.push("/")}>Logo</Box>
          </Box>
          <Box
            style={{ height: "100%" }}
            component="div"
            className={`${classes.buttonsLeft} `}
          >
            <Typography
              variant="subtitle1"
              onClick={() => history.push("/tournaments")}
              className={`${classes.buttons} ${classes.toolbar}`}
            >
              Tournaments
            </Typography>

            <Typography
              variant="subtitle1"
              onClick={() => history.push("/teams")}
              className={`${classes.buttons} ${classes.toolbar}`}
            >
              Times
            </Typography>
          </Box>
        </Box>

        <Box component="div" className={classes.navBarRightSide}>

          {mobile ? <Box component="div">{!isLogged ? (
            <Box component="div" className={classes.buttons}>
              <LoginPopup />
            </Box>
          ) : (
            <Box component="div" className={classes.buttons}>
              <RegisterTeamPopup />
            </Box>
          )}
          {!isLogged ? (
            <Box component="div" className={classes.buttons}>
              <RegisterUserPopup />
            </Box>
          ) : (
            <Box component="div" className={classes.buttons}>
              <RegisterTournamentPopup />
            </Box>
          )}

          <Box component="div" className={classes.menu}>
            {isLogged && (
              <CustonMenu
                name1="Perfil"
                onClick1={() => history.push(`/users/${loggedUserId}`)}
                name2="Deslogar"
                onClick2={handleLoggout}
              />
            )}
          </Box>
          </Box> : <Box component="div" className={classes.menuMobile}>
            <MenuMobile name1="Perfil"
                onClick1={() => history.push(`/users/${loggedUserId}`)}
                name2="Deslogar"
                onClick2={handleLoggout} />
            </Box>}
        </Box>
      </Box>
    </AppBar>
  );
}
