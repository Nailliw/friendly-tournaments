import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { purple } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { LoginPopup } from "../../Login/index";
import { RegisterUserPopup } from "../../Register/User/index";
import { RegisterTeamPopup } from "../../Register/Team/index";
import { RegisterTournamentPopup } from "../../Register/Tournament/index";

const useStyles = makeStyles((theme) => ({
  naviBarMenuButon: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  text: {
    color: " white",
  },

  navigationButtons: {
    "@media (max-width: 900px)": {
      width: "150px",
      height: "30px",

      margin: "0 0.5rem",
      padding: "0 1rem",

      borderRadius: "0.3rem",

      color: "#ccc",
      backgroundColor: "#454D60",
      boxShadow: "4px 4px 4px 2px black",
      borderBottom: "2px solid #AF5735",

      textAlign: "center",

      "&:hover": {
        cursor: "pointer",

        backgroundColor: "#303542",
        borderBottom: "1px solid #AF5735",

        boxShadow: "0.1em 0.1em 0.2em black",
      },
    },
  },
  mobileButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "100%",

    "& > *": {
      // width: "80%",
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#2B2C31",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuMobile(props) {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isLogged = useSelector((state) => state.UsersReducer.isLogged);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="div">
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        edge="start"
        color="primary"
        aria-label="menu"
      >
        <MenuIcon color="primary" />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box component="div" className={classes.mobileButtons}>
          <StyledMenuItem>
            <Typography
              variant="overline"
              component="h4"
              onClick={() => history.push("/tournaments")}
              className={classes.navigationButtons}
            >
              Torneios
            </Typography>
          </StyledMenuItem>

          <StyledMenuItem>
            <Typography
              variant="overline"
              component="h4"
              onClick={() => history.push("/teams")}
              className={classes.navigationButtons}
            >
              Equipes
            </Typography>
          </StyledMenuItem>

          <StyledMenuItem>
            {!isLogged ? (
              <Box component="div" className={classes.buttons}>
                <LoginPopup />
              </Box>
            ) : (
              <Box component="div" className={classes.buttons}>
                <RegisterTeamPopup />
              </Box>
            )}
          </StyledMenuItem>

          <StyledMenuItem>
            {!isLogged ? (
              <Box component="div" className={classes.buttons}>
                <RegisterUserPopup />
              </Box>
            ) : (
              <Box component="div" className={classes.buttons}>
                <RegisterTournamentPopup />
              </Box>
            )}
          </StyledMenuItem>

          {isLogged && (
            <StyledMenuItem>
              <Typography
                variant="overline"
                component="h4"
                onClick={props?.onClick1}
                className={classes.navigationButtons}
              >
                Perfil
              </Typography>
            </StyledMenuItem>
          )}

          {isLogged && (
            <Box component="div">
              <StyledMenuItem>
                <Typography
                  variant="overline"
                  component="h4"
                  onClick={props?.handleLoggout}
                  className={classes.navigationButtons}
                >
                  Sair
                </Typography>
              </StyledMenuItem>
            </Box>
          )}
        </Box>
      </StyledMenu>
    </Box>
  );
}
