import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardRootTournament: {
    width: 300,
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
    fontSize: "32px",
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
    marginTop: "5%",
    marginBottom: "5%",
  },
  TournamentsWonCard: {
    marginTop: "5%",
    marginBottom: "15%",
  },
  TournamentsWDisputedCard: {
    marginTop: "5%",
    marginBottom: "15%",
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
  },
});
