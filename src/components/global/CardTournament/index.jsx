import { DeadlineClock } from "../../global/DeadlineClock";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCategoriesListThunk } from "../../../store/modules/categories/thunk";
import { IsValidState } from "../../global/IsValidState";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { useStyles } from "./styles";
import { CardCategoryImg } from "../../global/CardCategoryImg";
import "./style.css";

export const CardTournament = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.CategoriesReducer);
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    dispatch(updateCategoriesListThunk());
    console.log(props.tournament);
  }, []);

  useEffect(() => {
    const filtro = categories.categoriesList.filter((category) => {
      return category.id === props.tournament.category;
    });

    if (IsValidState(filtro)) {
      console.log(filtro);
      setImgUrl(filtro[0].imgUrl);
      setCategoryId(filtro[0].id);
    }
  }, [categories]);

  return (
    <>
      <Card className={classes.cardRootTournament}>
        <CardActionArea>
          <CardCategoryImg idCategory={categoryId} />
          <CardContent className={classes.contents}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {props.tournament.title}
            </Typography>
            <Typography
              className={classes.info}
              variant="body2"
              color="textPrimary"
              component="p"
            >
              {props.tournament.info}{" "}
            </Typography>
            <Typography
              className={classes.teamsSize}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <Chip
                label={
                  props.tournament.teamsSize +
                  " vs " +
                  props.tournament.teamsSize
                }
                clickable
                color="secondary"
                variant="outlined"
              />
            </Typography>
            <Typography
              className={classes.deadline}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <DeadlineClock deadline={props.tournament.deadline} />
            </Typography>
            <Typography
              className={classes.slots}
              variant="body2"
              color="initial"
              component="p"
            >
              <Chip
                label={`Vagas disponíveis: ${
                  [props.tournament.numberOfTeams] -
                  [props.tournament.teamsData.length]
                }`}
                clickable
                color="primary"
                variant="default"
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.seeTournament}>
          <Button size="small" color="primary">
            Ver o torneio
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
