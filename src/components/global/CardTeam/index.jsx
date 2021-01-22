import { DeadlineClock } from "../../global/DeadlineClock";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsersListThunk } from "../../../store/modules/users/thunk";
import { updateCategoriesListThunk } from "../../../store/modules/categories/thunk";
import { updateTournamentsListThunk } from "../../../store/modules/tournaments/thunk";
import { IsValidState } from "../../global/IsValidState";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { CardCategoryImg } from "../../global/CardCategoryImg";
import { useHistory } from "react-router-dom";

export const CardTeam = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const categories = useSelector((state) => state.CategoriesReducer);
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [filteredTournamentsWon, setFilteredTournamentsWon] = useState([]);
  const [
    filteredTournamentsDisputed,
    setFilteredTournamentsDisputed,
  ] = useState([]);

  useEffect(() => {
    console.log(props.team);
    dispatch(updateCategoriesListThunk());
    setTimeout(() => {
      dispatch(updateTournamentsListThunk());
    }, 100);
    setTimeout(() => {
      dispatch(updateUsersListThunk());
    }, 200);
  }, []);

  useEffect(() => {}, [categories]);
  useEffect(() => {
    console.log(filteredPlayers);
  }, [filteredPlayers]);

  useEffect(() => {
    console.log(filteredTournamentsWon);
  }, [filteredTournamentsWon]);

  useEffect(() => {
    console.log(filteredTournamentsDisputed);
  }, [filteredTournamentsDisputed]);

  useEffect(() => {
    if (IsValidState(users.usersList)) {
      let newplayers = [];
      props.team.playersId.forEach((playerId) => {
        let playerData = users.usersList.filter((player) => {
          return playerId === player.id;
        });
        newplayers = [...newplayers, playerData[0]];
      });
      setFilteredPlayers(newplayers);
    }
  }, [users]);

  useEffect(() => {
    if (IsValidState(tournaments.tournamentsList)) {
      let tournamentsWon = [];

      props.team.tournamentsWon.forEach((tournamentsWonId) => {
        let tournamentsWonData = tournaments.tournamentsList.filter(
          (tournament) => {
            return tournamentsWonId === tournament.id;
          }
        );
        tournamentsWon = [...tournamentsWon, tournamentsWonData[0]];
      });

      setFilteredTournamentsWon(tournamentsWon);

      let tournamentsDisputed = [];

      props.team.tournamentsDisputed.forEach((tournamentsDisputedId) => {
        let tournamentsDisputedData = tournaments.tournamentsList.filter(
          (tournament) => {
            return tournamentsDisputedId === tournament.id;
          }
        );
        tournamentsDisputed = [
          ...tournamentsDisputed,
          tournamentsDisputedData[0],
        ];
      });

      setFilteredTournamentsDisputed(tournamentsDisputed);
    }
  }, [tournaments]);

  return (
    <Card className={classes.cardRootTournament}>
      <CardActionArea className={classes.cardArea}>
        <CardContent className={classes.contents}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.team.teamName}
          </Typography>
          <Typography
            className={classes.info}
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {props.team.teamInfo}
          </Typography>
          <Typography
            className={classes.teamsPlayers}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {IsValidState(filteredPlayers) && (
              <Chip
                className={classes.playerCard}
                label={`Membros: ${filteredPlayers.length}`}
                clickable
                color="primary"
                variant="default"
              />
            )}
          </Typography>
          <hr style={{ width: "100%" }} />
          <Typography
            className={classes.teamsPlayers}
            variant="body2"
            color="textSecondary"
            component="div"
          >
            {IsValidState(filteredTournamentsWon) && (
              <Chip
                className={classes.TournamentsWonCard}
                label={`Tournaments Won: ${filteredTournamentsWon.length}`}
                clickable
                color="primary"
                variant="default"
              />
            )}
          </Typography>
          <Typography
            className={classes.teamsPlayers}
            variant="body2"
            color="textSecondary"
            component="div"
          >
            {IsValidState(filteredTournamentsDisputed) && (
              <Chip
                className={classes.TournamentsDisputedCard}
                label={`Tournaments Disputed: ${filteredTournamentsDisputed.length}`}
                clickable
                color="primary"
                variant="default"
              />
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.seeTournament}>
        <Button
          onClick={() => {
            history.push(`/teams/${props.team.id}`);
          }}
          size="small"
          color="primary"
        >
          Ver equipe
        </Button>
      </CardActions>
    </Card>
  );
};
