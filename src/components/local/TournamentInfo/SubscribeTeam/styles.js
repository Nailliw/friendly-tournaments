import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  subTeamBox: {
    textAlign: "center",
  },

  subTeamContainer: {
    width: "30%",
    height: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ccc",
  },

  userRoot: {
    width: "80%",
    height: "100%",
    marginBottom: "10px",
    backgroundColor: "#353a46",
    color: "white",
  },

  title: {
    margin: "1%",
    fontSize: "20px",
    color: "blue",
  },

  info: {
    margin: "1rem",
    marginBottom: "5%",
    fontSize: "16px",
  },

  subTeamSelect: {
    textAlign: "center",
    margin: "1rem",
  },

  subTeamButtons: {
    textAlign: "center",
    margin: "1rem",

    "& button": {
      margin: "1rem",
    },
  },
}));
