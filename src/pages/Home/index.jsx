import { Link, Redirect, withRouter } from "react-router-dom";
import './home.css'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Button,Box,Paper} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imgGame: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Home = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box component="div" id="page">
    <Box component="div" id="home">
      <Box component="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzZVq_xElVlJ5mZOBesAccEd0Lvxna6w-Aw&usqp=CAU" alt="fundo da page"  className="BackgroundImage" id="imgPage"/>

      <Box component="div" id="body">
        <Box component="div" className="text">
        <h1>Find your game Tournament here!</h1>
        <h4>Over 100 tournament & event waiting you to join in</h4>
        </Box>        
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/tournaments")}
        >
          Join Tournaments
        </Button>
      </Box>
      </Box>

      <Box component="div" id="footer">
        <Box component="div" className="containerImg">
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=1")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWPipVWchgjBtNo1E6GMQ0gWW8AoImSmAYw&usqp=CAU" alt="Dota 2" width="100px" height="50px"/></Paper>
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=2")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgRI2imlqlIe-mceHRVVuggU61ZFMTHrnqQ&usqp=CAU" alt="APEX" width="100px" height="50px"/></Paper>
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=3")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kLv8658hvo8XXNaiQyVsO_kejoStYBx4aQ&usqp=CAU" alt="Stret Fiter" width="100px" height="50px"/></Paper>
          {/* <Paper elevation={7}  onClick={() => history.push("/tournaments?category=4")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrYLI88oNB_47TLKI5skTR5DS3ljntc5wPg&usqp=CAU" alt="Fortnite" width="100px" height="50px"/></Paper> */}
        </Box>

        <Box component="div" className="containerImg">
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=4")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7la8rwzzpvZOh_XD3Eac4pRo8QOhSSloKQ&usqp=CAU" alt="CS.GO" width="100px" height="50px"/></Paper>
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=5")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEIoXpCY9NNQtPXCExjN9E421gJWcv9ps4g&usqp=CAU" alt="LOL" width="100px" height="50px"/></Paper>
          <Paper elevation={7}  onClick={() => history.push("/tournaments?category=6")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYNCa_TgbccbkvEYuiyb9TnAsmts9CH0QMA&usqp=CAU" alt="Free fire" width="100px" height="50px"/></Paper>
          {/* <Paper elevation={7}  onClick={() => history.push("/tournaments?category=8")} className={classes.imgGame}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1PO0DQ1wPbYf7JCTmmD8wNll4eHT8M1Pow&usqp=CAU" alt="Valorent" width="100px" height="50px"/></Paper> */}
        </Box>
      </Box>
      </Box>
  );
};
