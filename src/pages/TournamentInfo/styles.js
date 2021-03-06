import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  tournamentInfoRoot: {
    minHeight: "90vh",
    width: "100%",

    margin: "0 auto",
    marginTop: "8vh",
    borderRadius: "1rem",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // backgroundColor: "#272A33",

    // backgroundColor: "#202442",
    // backgroundColor: "#202342",

    backgroundColor: "#2A2F55",
    // backgroundColor: "#3D4351",

    // backgroundColor: "#7033FF",
    // backgroundColor: "#FF7843",

    "@media (min-width: 600px)": {
      width: "93%",
    },
  },
}));
