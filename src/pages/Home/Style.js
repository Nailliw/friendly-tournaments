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
  height: "70%",
},

body: {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -70%)",
  width: "100%",
  height: "60%",
},

text: {
  position: "relative",
},

buttonBody: {
  position:"relative",
  top: "30%"
},

footer: {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2b2c31",
  position: "absolute",
  bottom: "0px",
  width: "100%",
  height: "30%",
},

imgGame: {
  marginRight: "7px",
  backgroundColor: "#3d3e43",
  display: 'flex',
  flexWrap: 'wrap',
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