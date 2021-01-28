import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  teamInfoRoot: {
    width: "100%",
    minHeight: "90vh",

    margin: "0 auto",
    marginTop: "8vh",
    borderRadius: "1rem",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    backgroundColor: "#2A2F55",

    "@media (min-width: 600px)": {
      width: "100%",
    },

    "@media (min-width: 1000px)": {
      width: "90%",
    },
  },
}));
