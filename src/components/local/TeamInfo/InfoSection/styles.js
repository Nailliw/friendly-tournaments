import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  teamInfoContainer: {
    width: "100%",

    padding: "0",

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",

    "& > div:first-child": {
      borderBottom: "2px rgb(255 255 255 / 20%) dotted",
      padding: "1rem",

      height: "100%",
      width: "80%",

      "@media (min-width: 1200px)": {
        width: "40%",
      },
    },

    "@media (min-width: 1200px)": {
      padding: "2rem",
      flexDirection: "row",

      "& > div:first-child": {
        borderRight: "2px rgb(255 255 255 / 20%) dotted",
        padding: "5rem",
        height: "100%",
      },
    },
  },

  teamInfoDetails: {
    width: "40%",
    height: "100% !important",

    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
  },

  teamInfoDetailsTitle: {
    marginBottom: "2rem",
    fontSize: "1.5rem",

    "@media (min-width: 1000px)": {
      fontSize: "2rem",
    },
  },

  teamInfoDetailsText: {
    margin: "1rem",

    fontSize: "1rem",

    "@media (min-width: 1000px)": {
      fontSize: "1.5rem",
    },
  },

  teamGameDetails: {
    width: "100%",

    display: "block",
    flexDirection: "column",
    alignItems: "start",

    "&  div": {
      margin: "1rem",
    },

    "@media (min-width: 1200px)": {
      display: "flex",
    },
  },

  teamGameInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  teamInfoBox: {
    width: "100%",
    height: "100%",

    padding: "2rem 0",
    // minHeight: "40vh",
    // maxHeight: "30vh",

    "@media (min-width: 1200px)": {
      width: "60%",
      padding: "0rem",
    },
  },

  teamInfoContent: {
    margin: "0 auto",
    height: "100%",
    // margin: "2rem",
    padding: "1rem",
    width: "90%",
    // height: "80%",

    // backgroundColor: "#564787",
    backgroundColor: "#ffffff0d",
    borderRadius: "1%",

    "@media (min-width: 1000px)": {
      width: "80%",
    },

    "@media (min-width: 1200px)": {
      width: "90%",
    },
  },
}));
