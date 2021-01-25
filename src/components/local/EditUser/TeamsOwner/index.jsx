import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "../styles";
import { Alert } from "@material-ui/lab";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UserExcluded from "./UserExcluded";
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
    return el?.userId === loggedUser?.loggedUser?.users?.id;
  });

  const handleSubmit = (evt) => {
    let aux = [];
    aux.push(Number(evt.target.dataset.teamidaux));
    //dispatch de excluir o time
    setAnchorEl(!anchorEl);
  };
  const handleToggle = () => {
    setAnchorEl(!anchorEl);
  };

  useEffect(() => {
    if (IsValidToken()) {
      if (loggedUser?.loggedUser?.users?.id === Number(userID)) {
        setValidOwner(true);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(updateTeamListThunk());
  }, []);

  return (
    <div>
      {loggedUser?.loggedUser?.users?.id === Number(userID) ? (
        <div>
          {reduced.map(({ id, teamName, playersId }, index) => {
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
                          variant="contained"
                          size="small"
                          color="secondary"
                          onClick={handleToggle}
                        >
                          Deseja excluir o time?
                        </Button>
                      )}
                    </Button>
                    {/* funcionalidade responsável por enviar um convite para um jogador */}
                    {/* <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                    >
                     Convidar jogador
                    </Button> */}
                  </AccordionActions>
                  {/* <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.containerTournament}>
                      {playersId?.map((el) => {
                        return <UserExcluded playersId={el} />;
                      })}
                    </div>
                  </AccordionDetails> */}
                </Accordion>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Para acessar essa área você deve estar logado</div>
      )}
    </div>
  );
};

export default TeamsOwner;
