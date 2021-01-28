import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  cardTitle: {
    margin: "1rem",
  },

  cardMessages: {
    width: "95%",
    minHeight: "40vh",
    margin: "0.5rem auto",
    padding: "1rem",
    border: "1px solid black",

    // backgroundColor: "#3D4351", // msg box
    backgroundColor: "#454d60", // msg box
    // backgroundColor: "#414e6f", // msg box
    // backgroundColor: "#a9a9af", // msg box
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
    // marginLeft: "1%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#afafaf",
  },
  sendMessageTextField: {
    width: "98%",

    "& *": {
      color: "#ccc",
      borderColor: "#afafaf9e",
    },
  },
}));
