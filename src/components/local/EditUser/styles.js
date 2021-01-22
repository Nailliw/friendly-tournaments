import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  userRoot: {
    width: "100%",
    height: "100%",
    marginBottom: "10px",
    backgroundColor: "#353a46",
    color: "white",
  },
  cardInviteContainer: {
    width: "100%",
    height: "100%",

    display: "flex",
    justifyContent: "flex-start",

    "@media (max-width: 768px)": {
      flexWrap: "wrap",
    },
  },
  formUserID: {
    display: "none",
    visibility: "hidden",
  },
  noClick: {
    backgroundColor: "#F3A712",
    "& > span": {
      pointerEvents: "none",
    },
  },
  containerAccordion: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  accordionStyle: {
    backgroundColor: "#353a46",
    width: "100%",
    color: "#fff",
    margin: "0.5rem",
    height: "100%",

    "@media (max-width: 768px)": {
      fontSize: "0.5rem",
    },
  },
  heading: {
    margin: "0",
    padding: "0",
    fontSize: "1rem",
    fontWeight: "bold",
  },

  // estilos do tournament
  accordionDetails: {
    backgroundColor: "#3D4351",
    width: "100%",
  },
  containerTournament: {
    width: "100%",
  },
  containerTournamentCard: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  tournamentCard: {
    width: "30%",
    margin: "0.2rem",
    color: "#fff",
    backgroundColor: "#586074",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
      width: "100%",
    },
  },
}));
