import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  userRoot: {
    width: "80%",
    height: "100%",
    marginBottom: "10px",
    backgroundColor: "#353a46",
    color: "white",
  },
  editTournament: {
    display: "flex",
    flexDirection: "column",
    alignItems: "normal",
    backgroundColor: "#ccc",
  },

  buttonsTourneyEdit: {
    textAlign: "center",
    display: "flex",

    "& button": {
      margin: "1rem ",
      alignSelf: "center",
    },
  },
}));
