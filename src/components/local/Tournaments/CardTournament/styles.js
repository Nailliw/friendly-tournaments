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
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "5%",
  },
  info: {
    textAlign: "center",
    marginBottom: "5%",
  },
  teamsSize: {
    textAlign: "center",
    marginBottom: "5%",
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
  deadline: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});
