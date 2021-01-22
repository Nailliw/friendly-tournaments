import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
page: {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
},

BackgroundImage: {
  position: "absolute",
  zIndex: "-1",
  width: "100%",
  height: "80%",
},

body: {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70%",
},

text: {
  position: "relative",
  textAlign: "center",
},

buttonBody: {
  position:"relative",
  top: "10%",
},

footer: {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2c31",
  position: "absolute",
  bottom: "0px",
  width: "100%",
  height: "20%",
  justifyContent: "center",
  alignItems: "center",
},

imgGame: {
  marginRight: "7px",
  backgroundColor: "#3d3e43",
  display: 'flex',
  flexWrap: 'wrap',
  "&:hover": {
    cursor:"pointer",    
  },
  "@media (max-width: 768px)": {
    width: "10px",
    height: "5px",  
    flexDirection: "row",
  },
},

containerImg: {
  position: "relative",
  width: "100%",
  height: "45%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2b2c31",
},

}));