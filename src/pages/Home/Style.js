import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  HomeContainer: {
    width: "100%",
    marginTop: "5vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  BackgroundImage: {
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    height: "80%",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },

  textSection: {
    position: "relative",
    textAlign: "center",
    margin: "1rem",
    padding: "3rem",

    borderRadius: "1rem",

    backgroundColor: "rgb(0,0,0,0.5)",

    "@media (min-width: 768px)": {
      backgroundColor: "rgb(0,0,0,0.8)",
    },
  },

  titleSection: {
    textAlign: "center",
    margin: "1rem",
    fontSize: "1.2rem",

    "@media (min-width: 600px)": {
      fontSize: "1.8rem",
    },

    "@media (min-width: 1000px)": {
      fontSize: "2.5rem",
    },
  },

  textBody: {
    fontSize: "0.8rem",

    "@media (min-width: 600px)": {
      fontSize: "1.2rem",
    },
  },

  buttonContainer: {
    position: "relative",
    top: "10%",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#2b2c31",
    position: "absolute",

    bottom: "0px",
    width: "100%",
    height: "20%",
    alignItems: "center",
  },

  gameImgContainer: {
    position: "relative",
    width: "100%",
    height: "40%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#2b2c31",

    "@media (min-width: 768px)": {
      flexDirection: "row",
      marginRight: "7px",
    },
  },

  imgGame: {
    backgroundColor: "#3d3e43",

    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",

    margin: "0.5rem",

    width: "30%",
    height: "100%",

    "& img": {
      borderRadius: "0.5rem",
      width: "100%",
      height: "100%",
    },

    "&:hover": {
      cursor: "pointer",
    },
    "@media (min-width: 700px)": {
      width: "20%",

      flexDirection: "row",
    },

    "@media (min-width: 1100px)": {
      width: "15%",
      margin: "1rem",
    },

    "@media (min-width: 1500px)": {
      width: "10%",
    },
  },
}));
