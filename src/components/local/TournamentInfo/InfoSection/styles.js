import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  tournamentInfoContainer: {
    width: "100%",
    // minHeight: "50vh",
    height: "80%",
    margin: "2rem",

    display: "flex",
    justifyContent: "space-around",

    "& > div:first-child": {
      borderRight: "2px rgb(255 255 255 / 20%) dotted",
    },
  },

  tournamentInfoDetails: {
    width: "50%",

    display: "flex",
    alignSelf: "start",
    flexDirection: "column",
  },

  tournamentInfoDetailsTitle: {
    marginBottom: "2rem",
  },

  tournamentInfoDetailsText: {
    margin: "1rem",
  },

  tournamentGameDetails: {
    width: "50%",
    margin: "1rem",
    padding: " 1rem",

    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly",

    "& > div:first-child": {
      borderTop: "2px rgb(255 255 255 / 20%) dotted",
      borderBottom: "2px rgb(255 255 255 / 20%) dotted",
    },

    "& > div:last-child": {
      // borderTop: "2px rgb(255 255 255 / 20%) dotted",
      borderBottom: "2px rgb(255 255 255 / 20%) dotted",
    },
  },

  tournamentGameInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // margin: "0.4rem",
    padding: "0.5rem 1rem",
  },

  tournamentInfoBox: {
    width: "50%",
    padding: "2rem",
    // minHeight: "40vh",
    // maxHeight: "30%",
  },

  tournamentInfoContent: {
    margin: "2rem",
    width: "80%",
    height: "80%",

    backgroundColor: "#272A33",
  },
}));
