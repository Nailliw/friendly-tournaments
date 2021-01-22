import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  titleHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "1rem",
    padding: "1rem",
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: "4rem",
  },
  titleContainer: {
    // width: "40%",
  },

  editButtonContainer: {
    // textAlign: "right",
    display: "flex",
    alignSelf: "center",

    "& > div": {
      margin: "0 2rem",
    },
  },

  signinButtonContainer: {
    // width: "40%",
    textAlign: "right",

    "& button": {
      backgroundColor: "#FF7843",
    },
    "& :hover": {
      backgroundColor: "#af5735",
    },
  },
}));
