import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  cardMessages: {
    width: "300px",
    margin: "1%",
    padding: ".5%",
    border: "1px solid black",
  },
  messagesContainer: {
    marginBottom: "2%",
    height: "320px",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sendMessageContainer: {
    display: "flex",
    flexDirection: "row",
  },
}));
