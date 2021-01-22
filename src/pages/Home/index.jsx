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
import useMediaQuery from '@material-ui/core/useMediaQuery';


export const Home = () => {
  const history = useHistory();
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:768px)');

  return (
    <Box component="div" className={classes.page}>
      <Box component="img" src={bannerImage} alt="fundo da page"  className={classes.BackgroundImage}/>

      <Box component="div" className={classes.body}>       
      {!mobile ? <Box component="div" className={classes.text}>
        <Typography variant="h1">Encontre seu torneio de jogo aqui!</Typography>
        <Typography variant="h4">Mais de 100 torneios e eventos esperando por você para participar</Typography> 
        </Box> : <Box component="div" className={classes.text}>
        <Typography variant="h4">Encontre seu torneio de jogo aqui!</Typography>
        <Typography variant="h6">Mais de 100 torneios e eventos esperando por você para participar</Typography> 
        </Box> }
        <Box component="div" className={classes.buttonBody}> 
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/tournaments")}
        >
          Junte-se a torneios!
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
