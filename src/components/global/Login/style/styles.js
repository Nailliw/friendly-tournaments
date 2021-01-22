import { makeStyles } from "@material-ui/core";
import imgLogin from "./img/logo-design-04.png";

export const useStyles = makeStyles(() => ({
  dialogRoot: {
    // backgroundColor: "#000",
  },

  dialogConteiner: {
    // backgroundColor: "rgb(25,26,28)",
    backgroundColor: "#ccc",
    height: "50%",
    width: "1000px",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
  },

  dialogStyle: {
    backgroundColor: "red",
    borderRadius: "2rem",
    boxShadow: "0.1em 0.1em 0.2em black",
  },

  imgLogin: {
    backgroundImage: `url(${imgLogin})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    overflow: "hidden",
    width: "50%",
    height: "100%",
  },

  form: {
    width: "50%",
    height: "100%",
  },

  FormInput: {
    height: "70%",
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
    height: "20%",
    width: "100%",
    margin: "0px;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  formLogin: {
    width: "100%",
    height: "90%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "baseline",
    alignItems: "center",

    // borderRadius: "2rem",
    // boxShadow: "0.1em 0.1em 0.2em black",
  },

  inputArea: {
    height: "70%",
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
    height: "30%",
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
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  formBottom: {
    width: "100%",
    height: "40%",
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
