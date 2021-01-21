import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  navBarContainer: {
    width: "100%",
    height: "6vh",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#24262D",
  },

  buttonsLeft: {
    display: "flex",
    width: "30%",
    justifyContent: "space-between",
    marginLeft: "10%",
  },
  navBarLeftSide: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navBarRightSide: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  logo: {
    marginLeft: "10%",
  },

  menu: {
    position: "relative",
    top: "15%",
  },

  buttons: {
    marginRight: "3px",
    marginLeft: "3px",
  },

  avatar: {
    backgroundColor: "blue[100]",
    color: "blue[600]",
  },
}));
