import { makeStyles } from "@material-ui/core";
import imgLogin from "./img/logo-design-04.png";

export const useStyles = makeStyles(() => ({
  ".MuiDialog-paper": {
    margin: "0",
  },

  ".MuiDialog-container": {
    width: "100%",
    height: "100%",
  },

  dialogConteiner: {
    minWidth: "250px",
    maxHeight: "850px",

    height: "90%",
    width: "90vw",

    margin: "0 4vw",
    padding: "0.2rem 0.5rem",
    border: "2px solid #ccc",

    backgroundColor: "#ccc",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    "@media (max-width: 768px)": {
      // Aumenta o Tamanho do Container principal apenas para Mobile, para Desktop Retorna para o Padrao do Material UI.
      maxWidth: "90vw", // NECESSARIO PARA ALTERAR A LARGURA ALEM DO PREDEFINIDO PELO MATERIAL UI
    },

    "@media (min-width: 500px)": {
      width: "80%",
    },
    "@media (min-width: 700px)": {
      width: "60%",
      height: "80%",
    },
  },

  imgLogin: {
    backgroundImage: `url(${imgLogin})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    overflow: "hidden",

    boxShadow: "7px 4px 5px 1px",
    borderRadius: "10%",

    width: "50%",
    height: "20%",
  },

  form: {
    width: "100%",
    height: "80%",
  },

  FormInput: {
    height: "90%",
    width: "100%",

    margin: "4vh 0",
    padding: "0.5rem",

    overflow: "hidden",

    "@media (min-width: 768px)": {
      padding: "2rem",
    },
  },

  formSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "@media (min-width: 700px)": {
      width: "80%",
      margin: "0",
    },
  },

  formInfo: {
    height: "15%",
    width: "100%",

    "& #form-dialog-title": {
      padding: "0.5rem",
    },
  },

  labelLogin: {
    margin: "0.5rem",
    padding: "0",
    textAlign: "center",

    fontWeight: "500",
    color: "rgb(8,53,108)",
    textShadow: "0.02em 0.05em 0.02em rgb(0,0,0)",

    "@media (min-width: 500px)": {
      fontSize: "2rem",
    },
  },

  formLogin: {
    backgroundColor: "rgba(255, 255, 255, 0.883)",
    boxShadow: "0.1em 0.1em 0.2em black",

    minWidth: "250px",
    height: "100%",
    maxHeight: "100%",

    overflow: "auto",
    borderRadius: "1rem",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",

    fontStyle: "italic",

    "@media (min-width: 500px)": {
      height: "80%",
      margin: "1rem",
    },

    "@media (min-width: 700px)": {
      width: "90%",
      height: "95%",
      margin: "0 auto",
    },
  },

  inputField: {
    textAlign: "center",
    width: "100%",
    "& > div": {
      width: "83%",

      marginBottom: "1rem",

      "@media (min-width: 768px)": {
        marginBottom: "2rem",
      },
    },
  },

  inputFieldDate: {
    width: "83%",
    marginBottom: "1rem",
    textAlign: "center",
  },

  InputSelect: {
    minWidth: "80%",
    width: "100%",

    maxWidth: "83%",

    textAlign: "center",

    marginBottom: "1rem",

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

    "@media (min-width: 500px)": {
      width: "100%",
    },
  },

  formBottom: {
    width: "100%",

    minHeight: "15%",
    maxHeight: "100%",

    margin: "0.5rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      margin: "0.5rem",
    },
  },

  boxButton: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media (min-width: 500px)": {
      width: "60%",
    },

    "@media (min-width: 700px)": {
      width: "50%",
    },
  },

  feedbackMessage: {
    width: "80%",
  },

  loginButton: {
    "@media (max-width: 900px)": {
      width: "150px",
      height: "30px",

      margin: "0 0.5rem",
      padding: "0 1rem",

      borderRadius: "0.3rem",

      color: "#ccc",
      backgroundColor: "#454D60",
      boxShadow: "4px 4px 4px 2px black",
      borderBottom: "2px solid #AF5735",

      textAlign: "center",

      "&:hover": {
        cursor: "pointer",

        backgroundColor: "#303542",
        borderBottom: "1px solid #AF5735",

        boxShadow: "0.1em 0.1em 0.2em black",
      },
    },

    "@media (min-width: 900px)": {
      height: "80%",

      backgroundColor: "#FF7843",
      boxShadow: "4px 4px 4px 2px black",

      "&:hover": {
        backgroundColor: "#AF5735",
      },

      "@media (min-width: 780px)": {
        height: "80%",
      },
    },
  },
}));
