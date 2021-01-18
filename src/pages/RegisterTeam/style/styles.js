import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  formRegister: {
    backgroundColor: "#225B81",
    maxWidth: "500px",
    maxHeight: "950px",
    width: "80vw",
    height: "80vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "2rem",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  formInfo: {
    height: "10%",
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  labelCadastro: {
    fontSize: "1.8rem",
    fontWeight: "500",
    paddingBottom: "0.5rem",
    textAlign: "center",
    color: "rgb(8,53,108)",
    textShadow: "0.02em 0.05em 0.02em rgb(0,0,0)",

    "@media (min-width: 1100px)": {
      fontSize: "2.5rem",
      paddingBottom: "1.5rem",
    },
  },

  inputArea: {
    height: "70%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    "@media (max-width: 500px)": {
      height: "40%",
    },
  },

  inputField: {
    width: "80%",
    height: "10%",
    // paddingBottom: "2rem",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  inputFieldRow: {
    width: "80%",
    height: "16%",
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

  select: {
    margin: "0.5rem",
    minWidth: "80%",
    maxWidth: "80%",

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
    "& option": {
      width: "10px",
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

  registerButton: {
    alignItems: "center",
    width: "40%",
    height: "30%",
    color: "white",
    backgroundColor: "rgba(8,53,108)",
    border: "1px solid black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(28,73,128)",
      boxShadow: "0.1em 0.1em 0.2em black",
    },
  },
}));
