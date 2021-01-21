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
  left: "60%",
  display: "flex",
  flexDirection: "row",
},

buttonsLeft: {
  position: "relative",
  top: "19%",
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
  top: "34%",
  "&:hover": {
    cursor:"pointer",
  },
},

menu: {
  position: "relative",
  "&:hover": {
    cursor:"pointer",
  },
},

buttons: {
  marginRight: "8px",
  marginLeft: "8px", 
  "&:hover": {
    cursor:"pointer",
  },
},



avatar: {
  backgroundColor: "blue[100]",
  color: "blue[600]",
},

}));