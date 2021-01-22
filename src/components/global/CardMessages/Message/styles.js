import makeStyles from "@material-ui/core/styles/makeStyles";
export const useStyles = makeStyles((theme) => ({
  messageContainer: {
    width: "100%",
    padding: "1%",
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "20px",
  },
  message: {
    fontSize: "16px",
    border: "0.5px solid black",
    borderRadius: "10px",
    marginTop: "1%",
    padding: "1%",
  },
}));
