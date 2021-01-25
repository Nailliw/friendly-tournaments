import { makeStyles } from "@material-ui/core";
import imgRegisterUser from "../../../assets/img/home-images/banners-design-02.jpg";

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
      width: "70%",
      height: "88%",
    },
  },

  imgLogin: {
    backgroundImage: `url(${imgRegisterUser})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",

    boxShadow: "7px 4px 5px 1px",

    width: "100%",
    height: "15%",
  },

  form: {
    width: "100%",
    height: "90%",
  },

  FormInput: {
    height: "100%",
    width: "100%",

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
      // minHeight: "75%",
    },
  },

  formInfo: {
    height: "15%",
    width: "100%",

    "& #form-dialog-title": {
      padding: "0.5rem",
    },
  },

  labelCadastro: {
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

  formRegister: {
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

    "@media (min-width: 700px)": {
      height: "100%",
      margin: "1rem",
    },
  },

  inputField: {
    textAlign: "center",
    width: "100%",
    "& > div": {
      width: "83%",

      marginBottom: "1rem",

      "@media (min-width: 768px)": {
        marginBottom: "0.5rem",
      },
    },
  },

  formBottom: {
    width: "100%",

    minHeight: "15%",
    maxHeight: "70%",

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
    justifyContent: "space-around",
  },

  feedbackMessage: {
    width: "80%",
  },

  createUserButton: {
    backgroundColor: "#FF7843",
    height: "100%",

    "&:hover": {
      backgroundColor: "#AF5735",
    },
    "@media (minWidth: 780px)": {
      height: "80%",
    },
  },
}));
