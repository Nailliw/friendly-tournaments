import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTournament from "../UserTournament";
import { IsValidToken } from "../../../../global/IsValidToken";

import { getTeamInfoThunk } from "../../../../../store/modules/teams/thunk";
import { updateTeamThunk } from "../../../../../store/modules/teams/thunk";
import { updateUsersListThunk } from "../../../../../store/modules/users/thunk";
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: 300,
};

const useStyles = makeStyles(() => ({
  noClick: {
    "& > span": {
      pointerEvents: "none",
    },
  },
}));

const TeamCard = ({ userId, memberOfTeams }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [validOwner, setValidOwner] = useState(false);
  const { selectedTeam, teamsList } = useSelector(
    ({ TeamsReducer }) => TeamsReducer
  );
  const dataUser = useSelector((state) => state.UsersReducer);
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(window.localStorage.getItem("users"));
  let { userID } = useParams();

  console.log(memberOfTeams);

  const classes = useStyles();
  const open = Boolean(anchorEl);

  const handleToggle = () => {
    setAnchorEl(!anchorEl);
  };

  const handleSubmit = (evt) => {
    //   let aux = [];
    //   aux.push(Number(evt.target.dataset.teamid));
    //   // let array = aux.split(",").map((el) => parseInt(el, 10));
    //   const playersId = aux.filter((item) => item !== userId);
    //   memberOfTeams = memberOfTeams.filter((el) => el !== parseInt(aux));
    //   console.log(playersId);
    //   //dispatch(updateTeamThunk(aux, { playersId }));
    //   // dispatch(updateUserThunk(userId, { memberOfTeams }));
    //   setAnchorEl(!anchorEl);
  };

  useEffect(() => {
    console.log("teamsList", teamsList);
    if (IsValidToken(loggedUser?.loggedUser.token)) {
      if (loggedUser?.loggedUser.users.id === Number(userID)) {
        setValidOwner(true);
      }
    }
  }, []);

  return (
    <div>
      {teamsList.map(
        (
          { id, teamName, playersId, tournamentsWon, tournamentsDisputed },
          index
        ) => {
          return (
            <div key={index} style={containerStyle}>
              <Accordion>
                <AccordionSummary>
                  <h1>{teamName}</h1>
                </AccordionSummary>
                <AccordionActions>
                  {validOwner === true ? (
                    <Button>
                      {open ? (
                        <Alert
                          severity="warning"
                          action={
                            <Button
                              data-teamid={id}
                              data-playersid={playersId}
                              className={classes.noClick}
                              onClick={handleSubmit}
                              color="inherit"
                              size="small"
                            >
                              Sair do Time!
                            </Button>
                          }
                        >
                          Para sair do time, confirme no botão ao lado!
                        </Alert>
                      ) : (
                        <Button
                          size="large"
                          color="secondary"
                          onClick={handleToggle}
                        >
                          Deseja sair do time?
                        </Button>
                      )}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </AccordionActions>
                <AccordionDetails>
                  <UserTournament
                    tournamentsDisputed={tournamentsDisputed}
                    tournamentsWon={tournamentsWon}
                  />
                </AccordionDetails>
              </Accordion>
            </div>
          );
        }
      )}
    </div>
  );
};

export default TeamCard;
