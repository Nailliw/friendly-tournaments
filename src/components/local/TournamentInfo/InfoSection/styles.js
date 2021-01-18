import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  tournamentInfoContainer: {
    width: "90%",
    margin: "2rem",

    display: "flex",
    justifyContent: "space-between",
  },

  tournamentInfoDetails: {
    width: "50%",
  },
  tournamentInfoDetailsTitle: {
    marginBottom: "2rem",
  },
  tournamentInfoDetailsText: {
    // margin: "1rem",
  },

  tournamentInfoBox: {
    width: "50%",
    height: "500px",
    backgroundColor: "#272A33",
  },
}));
