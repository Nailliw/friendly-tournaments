import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
navBarContainer: {
  width: "100%",
  height: "3rem",
  display: "flex",
},

navBarLeft: {
  position: "relative",
  display: "flex",
},

navBarRight: {
  position: "relative",
  left: "55%",
  display: "flex",
  flexDirection: "row",
},

buttonsLeft: {
  position: "relative",
  top: "20%",
  margin: "3%",
},

buttonsRight: {
  display: "flex",
  position: "relative",
  top: "15%",
  marginRight: "5px",
},

logo: {
  position: "relative",
  top: "35%",
},

menu: {
  position: "relative",
  top: "15%",
},

buttons: {
  marginRight: "3px",
  marginLeft: "3px",
},

avatar: {
  backgroundColor: "blue[100]",
  color: "blue[600]",
},

}));