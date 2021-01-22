import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  dialogRoot: {
    // backgroundColor: "#000",
  },

  dialogConteiner: {
    // backgroundColor: "#000",
    width: "20%",
    padding: "1rem",
    borderRadius: "10%",
  },

  dialogStyle: {
    backgroundColor: "red",
    borderRadius: "2rem",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  formLogin: {
    backgroundColor: "#225B81",
    maxWidth: "400px",
    maxHeight: "650px",
    width: "50vw",
    height: "50vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "2rem",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  formInfo: {
    height: "20%",
    width: "100%",
    margin: "0px;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  inputArea: {
    height: "100vh",
    width: "15vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    // "@media (min-width: 500px)": {
    //   height: "40%",
    // },
  },

  inputField: {
    width: "80%",
    height: "25%",
    // paddingBottom: "2rem",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: "13%",
    margin: "0",

    "& label.Mui-focused": {
      color: "rgb(8,53,108)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(8,53,108)",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgb(8,53,108)",
      },
    },
  },

  feedbackMessage: {
    width: "100%",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  formBottom: {
    width: "100%",
    height: "14%",
    color: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  loginButton: {
    alignItems: "center",
    width: "50%",
    height: "60%",
    color: "white",
    backgroundColor: "rgba(8,53,108)",
    border: "1px solid black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(28,73,128)",
      boxShadow: "0.1em 0.1em 0.2em black",
    },
  },
  loginbuttonstyle: {
    backgroundColor: "#FF7843",
    "&:hover": {
      backgroundColor: "#AF5735",
    },
  },
}));
