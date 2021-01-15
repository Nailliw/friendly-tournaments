import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  statusContainer: {
    width: "100%",
    height: "15%",
    padding: "0 2rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    // backgroundColor: "#272A33",

    // backgroundColor: "#202442",
    backgroundColor: "#20244280",

    // backgroundColor: "#2A2F55",
    // backgroundColor: "#3D4351",

    // backgroundColor: "#7033FF",
    // backgroundColor: "#FF7843",
  },
  statusInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "1rem",

    "& p": {
      color: "white",
      textAlign: "center",
    },
  },

  statusPaper: {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    borderRadius: "1.5rem",

    // backgroundColor: "#2D325A",
    backgroundColor: "#7033FF",
  },
  statusTitle: {
    fontSize: "1rem",
    margin: "0.2rem 0",
  },

  statusText: {},

  teamsInfo: {
    // backgroundColor: "#000",
    // width: "40%",
    display: "flex",
    // justifyContent: "space-between",
    "& > div": {
      margin: "0.1rem 1rem",
    },
  },

  teamsInfoTitle: {},

  teamsInfoText: {
    color: "#FF7843",
    textAlign: "right",

    padding: "0 2rem",
    fontSize: "2rem",
  },

  //   margin: "1rem",
  //   padding: "1rem",
  // },
  // mainTitle: {
  //   fontWeight: "bold",
  //   fontSize: "4rem",
  // },
  // titleContainer: {
  //   // width: "40%",
  // },
  // signinButtonContainer: {
  //   // width: "40%",
  //   textAlign: "right",

  //   "& button": {
  //     backgroundColor: "#FF7843",
  //   },
  // },
}));
