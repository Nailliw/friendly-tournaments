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
    marginRight: "5%",
  },

  logo: {
    marginLeft: "10%",
    "&:hover": {
      cursor:"pointer",
},
  },

  menu: {
    marginLeft: "5%",
    "&:hover": {
      cursor:"pointer",
},
  },

  menuMobile: {
    marginRight: "30%",
    "&:hover": {
      cursor:"pointer",
},
  },

  buttons: {
    height: "80%",
    marginRight: "3%",
    "&:hover": {
      cursor:"pointer",
},
  },
  toolbar: {
    paddingTop: "4%",
    "&:hover": {
      borderBottom: "1px solid #AF5735",
    },
  },

  avatar: {
    backgroundColor: "blue[100]",
    color: "blue[600]",
  },
}));

