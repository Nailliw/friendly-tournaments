import { makeStyles } from "@material-ui/core";
import imgRegisterUser from "./img/registerUser.png";

export const useStyles = makeStyles(() => ({
  dialogRoot: {
    width: "100vw",
    height: "100vh",
  },

  dialogConteiner: {
    // backgroundColor: "#000",
    backgroundColor: "#ccc",
    height: "80%",
    width: "1000px",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
  },

  imgLogin: {
    backgroundImage: `url(${imgRegisterUser})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "50%",
    height: "100%",
  },

  form: {
    width: "50%",
    height: "100%",
  },

  FormInput: {
    height: "90%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    // "@media (min-width: 500px)": {
    //   height: "40%",
    // },
  },

  formInfo: {
    height: "8%",
    width: "100%",
    margin: "0px;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  formRegister: {
    width: "100%",
    height: "90%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "baseline",
    alignItems: "center",
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
    height: "13%",
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
    height: "18%",
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
  createUserPop: {
    backgroundColor: "#FF7843",
    "&:hover": {
      backgroundColor: "#AF5735",
    },
  },
}));
