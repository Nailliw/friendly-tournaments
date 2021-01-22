import { makeStyles } from "@material-ui/core";
import imgTeam from "./img/esports-2.jpg";

export const useStyles = makeStyles(() => ({
  dialogRoot: {
    // backgroundColor: "#000",
  },

  dialogConteiner: {
    // backgroundColor: "#000",
    backgroundColor: "#ccc",
    height: "60%",
    width: "30%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
  },

  imgLogin: {
    backgroundImage: `url(${imgTeam})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100%",
    height: "35%",
  },

  form: {
    width: "100%",
    height: "65%",
  },

  formInfo: {
    height: "12%",
    width: "100%",
    margin: "0px;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  formRegister: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "baseline",
    alignItems: "center",

    // borderRadius: "2rem",
    // boxShadow: "0.1em 0.1em 0.2em black",
  },

  FormInput: {
    height: "83%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    // "@media (min-width: 500px)": {
    //   height: "40%",
    // },
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
    height: "29%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  inputFieldRow: {
    width: "80%",
    height: "45%",
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

  formBottom: {
    width: "100%",
    height: "35%",
    color: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  boxButton: {
    width: "100%",
    height: "55%",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  feedbackMessage: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  registerButton: {
    alignItems: "center",
    width: "40%",
    height: "25%",
    color: "white",
    backgroundColor: "rgba(8,53,108)",
    border: "1px solid black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(28,73,128)",
      boxShadow: "0.1em 0.1em 0.2em black",
    },
  },
  createTeam: {
    backgroundColor: "#FF7843",
    height: "100%",

    "&:hover": {
      backgroundColor: "#AF5735",
    },
    "@media(minWidth: 780px)": {
      height: "80%",
    },
  },
}));
