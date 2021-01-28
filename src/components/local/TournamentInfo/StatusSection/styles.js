import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  statusContainer: {
    width: "100%",
    maxWidth: "100%",
    height: "15%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    // backgroundColor: "#272A33",

    // backgroundColor: "#202442",
    backgroundColor: "#20244280",

    // backgroundColor: "#2A2F55",
    // backgroundColor: "#3D4351",

    // backgroundColor: "#7033FF",
    // backgroundColor: "#FF7843",

    "@media (min-width: 1200px)": {
      padding: "0 2rem",
      flexDirection: "row",
    },
  },

  statusInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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

      // flexDirection: "row",
      // justifyContent: "space-between",
    },
  },

  statusPaper: {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    borderRadius: "1.5rem",

    backgroundColor: "#2D325A",
    // backgroundColor: "#3f51b5",

    "& *": {
      fontSize: "0.6rem",

      "@media (min-width: 768px)": {
        fontSize: "0.8rem",
      },

      "@media (min-width: 1200px)": {
        fontSize: "1rem",
      },
    },
  },

  statusTitle: {
    fontSize: "0.8rem",
    margin: "0.2rem 0",

    color: "#ff8a5a !important",

    "@media (min-width: 768px)": {
      fontSize: "0.9rem",
    },

    "@media (min-width: 1000px)": {
      fontSize: "1rem",
    },

    "@media (min-width: 1200px)": {
      fontSize: "1rem",
    },
  },

  statusText: {},

  teamsInfo: {
    // backgroundColor: "#000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

    "& h6": {
      fontSize: "0.9rem",
    },

    "& > div": {
      margin: "0.1rem 1rem",
    },

    "@media (min-width: 768px)": {
      "& h6": {
        fontSize: "0.8rem",
      },
    },

    "@media (min-width: 1000px)": {
      "& h6": {
        fontSize: "1.1rem",
      },
    },

    "@media (min-width: 1200px)": {
      width: "70%",
      "& h6": {
        fontSize: "1.5rem",
      },
    },
  },

  teamsInfoTitle: {},

  teamsInfoText: {
    color: "#FF7843",
    textAlign: "center",

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
