import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  teamInfoContainer: {
    width: "100%",
    // minHeight: "50vh",
    // height: "80%",
    padding: "2rem",

    display: "flex",
    justifyContent: "space-between",

    "& > div:first-child": {
      borderRight: "2px rgb(255 255 255 / 20%) dotted",
      padding: "5rem",
      height: "100%",
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
  },

  teamInfoDetailsText: {
    margin: "1rem",
  },

  teamGameDetails: {
    width: "100%",
    // margin: "1rem",
    // padding: " 1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "start",

    // justifyContent: "space-evenly",

    "&  div": {
      margin: "1rem",
    },

    // "& > div:first-child": {
    //   borderTop: "2px rgb(255 255 255 / 20%) dotted",
    //   borderBottom: "2px rgb(255 255 255 / 20%) dotted",
    // },

    // "& > div:last-child": {
    //   // borderTop: "2px rgb(255 255 255 / 20%) dotted",
    //   borderBottom: "2px rgb(255 255 255 / 20%) dotted",
    // },
  },

  teamGameInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    // margin: "0.4rem",
    // padding: "0.5rem 1rem",
  },

  teamInfoBox: {
    width: "60%",
    height: "100%",
    padding: "2rem",
    // minHeight: "40vh",
    // maxHeight: "30vh",
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
  },
}));
