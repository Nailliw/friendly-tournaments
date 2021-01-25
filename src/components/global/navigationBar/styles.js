import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  navBarRoot: {
    backgroundColor: "#24262D",
  },

  navBarContainer: {
    width: "100%",
    height: "10vh",
    display: "flex",
    alignItems: "center",

    // backgroundColor: "#24262D",

    "@media (min-width: 780px)": {
      height: "7vh",
    },
  },

  buttonsLeft: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    alignSelf: "center",
    marginLeft: "10%",
  },

  navigationButtons: {
    width: "80%",
    height: "100%",

    margin: "0 0.5rem",
    padding: "0 1rem",

    borderRadius: "0.3rem",

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

  logo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10%",
    height: "90%",

    boxShadow: "2px 2px 2px 0px black",

    borderBottom: "2px solid #AF5735",
    borderRadius: "0.5rem",

    "&:hover": {
      cursor: "pointer",
      borderBottom: "1px solid #AF5735",
    },

    "& > *": {
      margin: "0.5rem",
    },

    "& > h3": {
      fontWeight: "900",
      width: "80px",
    },
  },

  desktop: {
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  navBarLeftSide: {
    width: "50%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    "& > h3": {
      width: "100%",
    },

    "@media (min-width: 780px)": {
      // height: "7vh",
    },
  },

  navBarRightSide: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "5%",
  },

  menu: {
    marginLeft: "5%",
    "&:hover": {
      cursor: "pointer",
    },
  },

  menuMobile: {
    marginRight: "20%",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuButton: {
    boxShadow: "2px 2px 2px 0px black",
    backgroundColor: "#999999",

    borderBottom: "2px solid #AF5735",
    borderRadius: "0.5rem",
    padding: "0.5rem",

    "&:hover": {
      cursor: "pointer",
      borderBottom: "1px solid #AF5735",
    },
  },

  buttons: {
    height: "80%",
    marginRight: "3%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
