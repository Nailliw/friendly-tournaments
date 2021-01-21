import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core";
import { useStyles } from "../styles";
import { Alert } from "@material-ui/lab";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTeamListThunk } from "../../../../store/modules/teams/thunk";
import { IsValidToken } from "../../../global/IsValidToken";

const TeamsOwner = ({ data }) => {
  const { selectedTeam, teamsList } = useSelector(
    ({ TeamsReducer }) => TeamsReducer
  );
  const [validOwner, setValidOwner] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const loggedUser = JSON.parse(window.localStorage.getItem("users"));

  let { userID } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = Boolean(anchorEl);

  let reduced = teamsList.filter((el) => {
    return el.userId === loggedUser?.loggedUser.users.id;
  });

  const handleSubmit = () => {
    setAnchorEl(!anchorEl);
  };
  const handleToggle = () => {
    setAnchorEl(!anchorEl);
  };

  useEffect(() => {
    if (IsValidToken()) {
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
      {loggedUser?.isLogged !== true ? (
        <div>
          {reduced.map(
            ({ id, teamName, tournamentsWon, tournamentsDisputed }, index) => {
              return (
                <div key={index} className={classes.containerAccordion}>
                  <Accordion className={classes.accordionStyle}>
                    <AccordionSummary>
                      <h1>{teamName}</h1>
                    </AccordionSummary>
                    <AccordionActions>
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
                                Excluir o time!
                              </Button>
                            }
                          >
                            Para excluir o time, confirme no botão ao lado!
                          </Alert>
                        ) : (
                          <Button
                            data-teamidaux={id}
                            className={classes.noClick}
                            size="large"
                            color="secondary"
                            onClick={handleToggle}
                          >
                            Deseja excluir o time?
                          </Button>
                        )}
                      </Button>
                    </AccordionActions>
                    <AccordionDetails className={classes.accordionDetails}>
                      <div className={classes.containerTournament}>
                        DESEJA EXCLUIR O ANIMALZINHO NOOB?
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <div>Para acessar essa área você deve estar logado</div>
      )}
    </div>
  );
};

export default TeamsOwner;
