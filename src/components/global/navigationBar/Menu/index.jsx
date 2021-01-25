import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { purple } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  naviBarMenuButon: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  text: {
    color: " white",
  },
  StyledMenuitem: {
    "&:hover": {
      backgroundColor: "#AF5735",
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#2B2C31",
  },
})((props) => (
  <Menu
    keepMounted
    elevation={12}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
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

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

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
        <MenuIcon style={{ color: "#fff" }} />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          className={classes.StyledMenuitem}
          onClick={props.onClick1}
        >
          <Typography variant="button" className={classes.text}>
            {props.name1}
          </Typography>
        </StyledMenuItem>
        <StyledMenuItem
          className={classes.StyledMenuitem}
          onClick={props.onClick2}
        >
          <Typography variant="button" className={classes.text}>
            {props.name2}
          </Typography>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
