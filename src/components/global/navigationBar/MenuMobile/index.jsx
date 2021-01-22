import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Button,Box} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { purple } from '@material-ui/core/colors';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
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
    color:" white",
  }
}));

const StyledMenu = withStyles({
  paper: {
    backgroundColor: '#2B2C31', 
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function MenuMobile(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const isLogged = useSelector((state) => state.UsersReducer.isLogged);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton
	aria-controls="fade-menu"
	aria-haspopup="true"
	onClick={handleClick}
	edge="start"
	className={classes.menuButton}
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
        <StyledMenuItem onClick={props.onClick1}>
        <Typography variant="button" className={classes.text} >
          {props.name1}
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
        {isLogged && <Box component="div">           
        <StyledMenuItem onClick={props.onClick2}>
        <Typography variant="button" className={classes.text} >
          {props.name2}
        </Typography> 
        </StyledMenuItem>
        </Box>}
      </StyledMenu>
    </div>
  );
}