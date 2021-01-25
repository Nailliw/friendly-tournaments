import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  updateIsLoggedThunk,
  logoutThunk,
} from "../../../store/modules/users/thunk";

import CustomMenu from "./Menu/index";
import MenuMobile from "./MenuMobile/index";

import { LoginPopup } from "../Login/index";

import { RegisterUserPopup } from "../Register/User/index";
import { RegisterTeamPopup } from "../Register/Team/index";
import { RegisterTournamentPopup } from "../Register/Tournament/index";

import logoImage from "../../global/assets/img/home-images/logo-design-05.jpg";

import { Avatar, Typography, AppBar, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";

export default function NavigationBar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const isLogged = useSelector((state) => state.UsersReducer.isLogged);
  const [loggedUserId, setLoggedUserId] = useState("");

  const IsDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) {
      setLoggedUserId(
        JSON.parse(window.localStorage.getItem("users"))?.loggedUser?.users?.id
      );
    }
  }, [isLogged]);

  const handleLoggout = () => {
    localStorage.clear();
    dispatch(logoutThunk());
    dispatch(updateIsLoggedThunk());
  };

  return (
    <AppBar className={classes.navBarRoot}>
      <Box component="div" className={classes.navBarContainer}>
        <Box componet="div" className={classes.navBarLeftSide}>
          <Box
            component="div"
            onClick={() => history.push("/")}
            className={classes.logo}
          >
            <Avatar
              alt="Site Logo"
              src={logoImage}
              className={classes.logoImg}
            />
            <Typography variant="subtitle2" component="h3">
              Players Hub
            </Typography>
          </Box>

          <Box component="div" className={classes.buttonsLeft}>
            {IsDesktop && (
              <>
                <Typography
                  variant="overline"
                  component="h4"
                  onClick={() => history.push("/tournaments")}
                  className={classes.navigationButtons}
                >
                  Torneios
                </Typography>

                <Typography
                  variant="overline"
                  component="h4"
                  onClick={() => history.push("/teams")}
                  className={classes.navigationButtons}
                >
                  Equipes
                </Typography>
              </>
            )}
          </Box>
        </Box>

        <Box component="div" className={classes.navBarRightSide}>
          {IsDesktop ? (
            <Box className={classes.desktop} component="div">
              {!isLogged ? (
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
                  <CustomMenu
                    name1="Perfil"
                    onClick1={() => history.push(`/users/${loggedUserId}`)}
                    name2="Deslogar"
                    onClick2={handleLoggout}
                  />
                )}
              </Box>
            </Box>
          ) : (
            <Box component="div" className={classes.menuMobile}>
              <MenuMobile
                name1="Perfil"
                onClick1={() => history.push(`/users/${loggedUserId}`)}
                name2="Deslogar"
                handleLoggout={handleLoggout}
              />
            </Box>
          )}
        </Box>
      </Box>
    </AppBar>
  );
}
