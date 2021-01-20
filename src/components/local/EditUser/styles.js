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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  formUserID: {
    display: "none",
    visibility: "hidden",
  },
}));
