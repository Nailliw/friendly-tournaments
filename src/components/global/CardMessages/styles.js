import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  cardMessages: {
    width: "80%",
    margin: "1% auto",
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
    marginLeft: "1%",
    width: "98%",
    display: "flex",
    flexDirection: "row",
  },
  sendMessageTextField: {
    width: "98%",
  },
}));
