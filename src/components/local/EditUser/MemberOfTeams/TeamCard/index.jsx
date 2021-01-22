import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Alert } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTournament from "../UserTournament";
import { IsValidToken } from "../../../../global/IsValidToken";

import { useStyles } from "../../styles";

import {
  getTeamInfoThunk,
  updateTeamListThunk,
  updateTeamThunk,
} from "../../../../../store/modules/teams/thunk";

import { updateUserThunk } from "../../../../../store/modules/users/thunk";

const TeamCard = ({ userId, memberOfTeams }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [validOwner, setValidOwner] = useState(false);
  const { selectedTeam, teamsList } = useSelector(
    ({ TeamsReducer }) => TeamsReducer
  );

  const loggedUser = JSON.parse(window.localStorage.getItem("users"));

  let { userID } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  let reduced = teamsList.filter((el) => {
    return el.playersId.includes(userId);
  });

  const open = Boolean(anchorEl);

  const handleToggle = (evt) => {
    let aux = [];
    aux.push(Number(evt.target.dataset.teamidaux));
    dispatch(getTeamInfoThunk(aux[0]));
    setAnchorEl(!anchorEl);
  };

  const handleSubmit = (evt) => {
    let aux = [];
    aux.push(Number(evt.target.dataset.teamid));

    const playersId = selectedTeam.playersId.filter((item) => item !== userId);
    dispatch(updateTeamThunk(aux, { playersId }));

    memberOfTeams = memberOfTeams.filter((item) => item !== aux[0]);

    dispatch(updateUserThunk(userId, { memberOfTeams }));

    setAnchorEl(!anchorEl);
    dispatch(getTeamInfoThunk(aux[0]));
    dispatch(updateTeamListThunk());
  };

  useEffect(() => {
    if (IsValidToken(loggedUser?.loggedUser.token)) {
      if (loggedUser?.loggedUser.users.id === Number(userID)) {
        setValidOwner(true);
      }
    }
  }, []);
  useEffect(() => {
    dispatch(updateTeamListThunk());
  }, []);

  return (
    <div>
      {reduced.map(
        ({ id, teamName, tournamentsWon, tournamentsDisputed }, index) => {
          return (
            <div key={index} className={classes.containerAccordion}>
              <Accordion className={classes.accordionStyle}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                >
                  <Typography className={classes.heading}>
                    {teamName}
                  </Typography>
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
                          data-teamidaux={id}
                          className={classes.noClick}
                          variant="contained"
                          size="small"
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
                <AccordionDetails className={classes.accordionDetails}>
                  <div className={classes.containerTournament}>
                    <UserTournament
                      tournamentsDisputed={tournamentsDisputed}
                      tournamentsWon={tournamentsWon}
                    />
                  </div>
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
