import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  statusContainer: {
    width: "100%",
    height: "15%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#15384F",
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

    backgroundColor: "#2D325A",
  },
  statusTitle: {
    fontSize: "1rem",
    margin: "0.2rem 0",
  },

  statusText: {},

  teamsInfo: {},

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
