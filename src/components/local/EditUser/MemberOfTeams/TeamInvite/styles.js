import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  inviteCard: {
    width: "100%",
    height: "33%",

    margin: "0.5rem 0",
    padding: "0.5rem",
    backgroundColor: "#4F5669",
    color: "#fff",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media (min-width: 780px)": {
      width: "80%",
    },
  },
}));
// 3d4351
