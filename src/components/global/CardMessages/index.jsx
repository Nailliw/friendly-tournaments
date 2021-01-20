import { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";
import { Message } from "./Message";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTournamentThunk,
  updateTournamentsListThunk,
} from "../../../store/modules/tournaments/thunk";
import { IsValidState } from "../../global/IsValidState";
import { IsValidToken } from "../../global/IsValidToken";

export const CardMessages = ({ tournamentId }) => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const classes = useStyles();
  const [tournament, setTournament] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [personName, setPersonName] = useState("");

  useEffect(() => {
    dispatch(updateTournamentsListThunk());
    if (IsValidToken()) {
      console.log(JSON.parse(window.localStorage.getItem("users")));
      setPersonName(
        JSON.parse(window.localStorage.getItem("users")).loggedUser.users
          .firstName
      );
    }
  }, []);

  useEffect(() => {
    if (IsValidState(tournaments.tournamentsList)) {
      setTournament(
        tournaments.tournamentsList.filter((tournament) => {
          return tournament.id === tournamentId;
        })[0]
      );
    }
  }, [tournaments]);

  useEffect(() => {
    console.log(personName);
  }, [personName]);

  useEffect(() => {
    console.log(tournament);
  }, [tournament]);

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handlePress = (e) => {
    if (e.code === "Enter") {
      addMessage();
    }
  };

  const addMessage = () => {
    let tournamentData = {
      ...tournament,
      messagesList: [
        ...tournament.messagesList,
        { name: personName, message: newMessage },
      ],
    };
    console.log(tournamentData);

    dispatch(updateTournamentThunk(tournamentId, tournamentData));

    setTimeout(() => {
      dispatch(updateTournamentsListThunk());
    }, 100);

    setTimeout(() => {
      setNewMessage("");
    }, 200);
  };

  return (
    <>
      <div className={classes.cardMessages}>
        {IsValidState(tournament.messagesList) && (
          <div className={classes.messagesContainer}>
            {tournament.messagesList.map((personMessage, i) => {
              return <Message personMessage={personMessage} />;
            })}
          </div>
        )}

        {IsValidState(personName) && IsValidState(tournament.messagesList) && (
          <div className={classes.sendMessageContainer}>
            <TextField
              className={classes.sendMessageTextField}
              required
              id="outlined-search"
              label="Mensagem"
              type="search"
              variant="outlined"
              name="usuario"
              onKeyPress={handlePress}
              onChange={handleNewMessage}
              value={newMessage}
              autoComplete={"off"}
            />
            <Button onClick={addMessage} size="small" color="primary">
              <SendIcon />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
