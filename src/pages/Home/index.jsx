import { Link, Redirect, withRouter } from "react-router-dom";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Button,Box,Paper} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import 'fontsource-roboto';
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Style";

export const Home = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box component="div" className={classes.page}>
      <Box component="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzZVq_xElVlJ5mZOBesAccEd0Lvxna6w-Aw&usqp=CAU" alt="fundo da page"  className={classes.BackgroundImage}/>

      <Box component="div" className={classes.body}>       
        <Box component="div" className={classes.text}>
        <Typography variant="h2">Find your game Tournament here!</Typography>
        <Typography variant="h5">Over 100 tournament & event waiting you to join in</Typography> 
        </Box> 
        <Box component="div" className={classes.buttonBody}> 
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/tournaments")}
        >
          Join Tournaments
        </Button>
        </Box>  
        </Box> 

      <Box component="div" className={classes.footer}>
        <Box component="div" className={classes.containerImg}>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=1")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWPipVWchgjBtNo1E6GMQ0gWW8AoImSmAYw&usqp=CAU" alt="Dota 2" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=2")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgRI2imlqlIe-mceHRVVuggU61ZFMTHrnqQ&usqp=CAU" alt="APEX" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=3")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kLv8658hvo8XXNaiQyVsO_kejoStYBx4aQ&usqp=CAU" alt="Stret Fiter" width="100px" height="50px"/></Paper>
        </Box>

        <Box component="div" className={classes.containerImg}>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=4")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7la8rwzzpvZOh_XD3Eac4pRo8QOhSSloKQ&usqp=CAU" alt="CS.GO" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=5")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEIoXpCY9NNQtPXCExjN9E421gJWcv9ps4g&usqp=CAU" alt="LOL" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=6")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYNCa_TgbccbkvEYuiyb9TnAsmts9CH0QMA&usqp=CAU" alt="Free fire" width="100px" height="50px"/></Paper>
        </Box>
      </Box>
      </Box>
  );
};
