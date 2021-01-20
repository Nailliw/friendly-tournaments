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
    // height: "100% !important",

    display: "flex",
    alignSelf: "center",
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
    height: "100% !important",
    padding: "2rem",
    // minHeight: "40vh",
    // maxHeight: "30vh",
  },

  tournamentInfoContent: {
    height: "100% !important",
    // margin: "2rem",
    padding: "1rem",
    width: "90%",
    // height: "80%",

    // backgroundColor: "#564787",
    backgroundColor: "#ffffff0d",
    borderRadius: "5%",
  },
}));
