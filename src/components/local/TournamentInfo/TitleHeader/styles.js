import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  titleHeader: {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",

    margin: "2rem",

    "@media (min-width: 1200px)": {
      flexDirection: "row",

      margin: "1rem",
      padding: "1rem",
    },
  },

  mainTitle: {
    fontWeight: "bold",
    fontSize: "2.5rem",

    paddingBottom: "1rem",

    "@media (min-width: 768px)": {
      fontSize: "3rem",
    },

    "@media (min-width: 1000px)": {
      fontSize: "3.5rem",
    },

    "@media (min-width: 1200px)": {
      fontSize: "4rem",
    },
  },

  titleContainer: {
    width: "100%",
    textAlign: "center",
  },

  editButtonContainer: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",

    "& > div": {
      margin: "0.5rem 2rem 0",
    },

    "& button": {
      fontSize: "0.6rem",
      padding: "0.4rem",

      heigth: "30px",
      width: "80px",

      "@media (min-width: 1200px)": {
        fontSize: "0.8rem",

        heigth: "30px",
        width: "100px",
      },
    },

    "@media (min-width: 1200px)": {
      // flexDirection: "row",
    },
  },

  signinButtonContainer: {
    textAlign: "right",

    "& button": {
      backgroundColor: "#FF7843",
      fontSize: "0.6rem",
      heigth: "80px",
      width: "120px",

      "@media (min-width: 1000px)": {
        fontSize: "0.7rem",
      },

      "@media (min-width: 1200px)": {
        fontSize: "0.7rem",
      },
    },

    "& :hover": {
      backgroundColor: "#af5735",
    },
  },
}));
