import { useHistory } from "react-router-dom";

import { Button, Box, Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Style";

import bannerImage from "../../components/global/assets/img/home-images/banners-design-03.jpg";
import category1 from "../../components/global/assets/img/category-images/categoryChess.jpg";
import category2 from "../../components/global/assets/img/category-images/categoryLoL.jpg";
import category3 from "../../components/global/assets/img/category-images/categoryWoW.jpg";
import category4 from "../../components/global/assets/img/category-images/categoryRetro.jpg";
import category5 from "../../components/global/assets/img/category-images/categoryOthers.jpg";

export const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box component="div" className={classes.HomeContainer}>
      <Box className={classes.BackgroundImage}>
        <Box component="img" src={bannerImage} alt="fundo da page" />
      </Box>

      <Box component="div" className={classes.bodyContainer}>
        <Box component="div" className={classes.textSection}>
          <Typography
            variant="h5"
            component="h1"
            className={classes.titleSection}
          >
            Torneios e Partidas Individuais, além de conhecer pessoas com
            interesses em comum.
          </Typography>

          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.textBody}
          >
            Participe de Torneios ou Partidas Individuais do Jogo que você
            quiser e se não houver uma Partida em andamento, Você tem o Poder de
            Criar Uma!
          </Typography>
        </Box>

        <Box component="div" className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/tournaments")}
          >
            Junte-se a torneios!
          </Button>
        </Box>
      </Box>

      <Box component="div" className={classes.footerContainer}>
        <Box component="div" className={classes.gameImgContainer}>
          <Paper
            elevation={24}
            onClick={() => history.push("/tournaments?category=1")}
            className={classes.imgGame}
          >
            <Box
              component="img"
              src={category1}
              alt="Xadrez"
              width="100px"
              height="50px"
            />
          </Paper>
          <Paper
            elevation={24}
            onClick={() => history.push("/tournaments?category=2")}
            className={classes.imgGame}
          >
            <Box
              component="img"
              src={category2}
              alt="League of Legends"
              width="100px"
              height="50px"
            />
          </Paper>
          <Paper
            elevation={24}
            onClick={() => history.push("/tournaments?category=3")}
            className={classes.imgGame}
          >
            <Box
              component="img"
              src={category3}
              alt="World of Warcraft"
              width="100px"
              height="50px"
            />
          </Paper>
          <Paper
            elevation={24}
            onClick={() => history.push("/tournaments?category=4")}
            className={classes.imgGame}
          >
            <Box
              component="img"
              src={category4}
              alt="Retro Games"
              width="100px"
              height="50px"
            />
          </Paper>
          <Paper
            elevation={24}
            onClick={() => history.push("/tournaments?category=5")}
            className={classes.imgGame}
          >
            <Box
              component="img"
              src={category5}
              alt="Outros Games"
              width="100px"
              height="50px"
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
