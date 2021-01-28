import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  statusContainer: {
    width: "100%",
    maxWidth: "100%",

    height: "15%",
    padding: "0",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",

    backgroundColor: "#202442",

    // backgroundColor: "#25294B",

    // backgroundColor: "#3D4351", // msg box

    "@media (min-width: 1200px)": {
      padding: "0 2rem",
      flexDirection: "row",
    },
  },

  statusInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    flexWrap: "wrap",

    width: "100%",
    maxHeight: "150px",

    "& p": {
      color: "white",
      textAlign: "center",
    },

    "@media (min-width: 1200px)": {
      width: "100%",
      margin: "1rem 0",
    },
  },

  teamsInfo: {
    width: "100%",

    display: "flex",
    flexDirection: "row",

    justifyContent: "center",

    "& > div": {
      margin: "0.2rem",
    },

    "@media (min-width: 768px)": {
      "& > div": {
        margin: "0.1rem 1rem",
      },
    },

    "@media (min-width: 1200px)": {
      width: "70%",
    },
  },

  teamsInfoTitle: {
    fontSize: "0.7rem",

    "@media (min-width: 768px)": {
      fontSize: "0.8rem",
    },

    "@media (min-width: 1000px)": {
      fontSize: "1.1rem",
    },

    "@media (min-width: 1200px)": {
      fontSize: "1.5rem",
    },
  },

  teamsInfoText: {
    color: "#FF7843",
    textAlign: "center",

    padding: "0 2rem",
    fontSize: "1rem",

    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
  },
}));
