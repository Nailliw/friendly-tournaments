import { Link, Redirect, withRouter } from "react-router-dom";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Button,Box,Paper} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import 'fontsource-roboto';
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Style";

import bannerImage from '../../components/global/assets/img/home-images/banners-design-03.jpg'
import category1 from '../../components/global/assets/img/category-images/categoryChess.jpg'
import category2 from '../../components/global/assets/img/category-images/categoryLoL.jpg'
import category3 from '../../components/global/assets/img/category-images/categoryWoW.jpg'
import category4 from '../../components/global/assets/img/category-images/categoryRetro.jpg'
import category5 from '../../components/global/assets/img/category-images/categoryOthers.jpg'


export const Home = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box component="div" className={classes.page}>
      <Box component="img" src={bannerImage} alt="fundo da page"  className={classes.BackgroundImage}/>

      <Box component="div" className={classes.body}>       
        <Box component="div" className={classes.text}>
        <Typography variant="h1">Find your game Tournament here!</Typography>
        <Typography variant="h4">Over 100 tournament & event waiting you to join in</Typography> 
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
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=1")} className={classes.imgGame}><img src={category1} alt="Dota 2" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=2")} className={classes.imgGame}><img src={category2} alt="APEX" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=3")} className={classes.imgGame}><img src={category3} alt="Stret Fiter" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=4")} className={classes.imgGame}><img src={category4} alt="CS.GO" width="100px" height="50px"/></Paper>
          <Paper elevation={24}  onClick={() => history.push("/tournaments?category=5")} className={classes.imgGame}><img src={category5} alt="LOL" width="100px" height="50px"/></Paper>
          
        </Box>

      </Box>
      </Box>
  );
};
