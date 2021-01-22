import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardRootTournament: {
    width: 250,
    margin: "2%",
    backgroundColor: "#3D4351",
    "&  *": {
      color: "#FFF",
    },
  },

  media: {
    height: 140,
  },

  contents: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    marginBottom: "5%",
  },

  info: {
    textAlign: "center",
    marginBottom: "5%",
  },

  teamsPlayers: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "5%",
  },

  playerCard: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  TournamentsWonCard: {
    marginTop: "10%",
    marginBottom: "1%",
  },

  TournamentsDisputedCard: {
    marginTop: "1%",
    marginBottom: "2%",
  },

  subtitle: {
    fontSize: "24px",
    marginTop: "15%",
    marginBottom: "10%",
    fontWeight: "bold",
  },

  slots: {
    textAlign: "center",
    marginTop: "5%",
  },

  seeTournament: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    "& button": {
      backgroundColor: "#454D60",
      width: "80%",
      "&:hover": {
        backgroundColor: "#303542",
        boxShadow: "0.1em 0.1em 0.2em black",
      },
    },
  },
});
