import { useStyles } from "./styles";
import { Box, Button, Typography, Tooltip } from "@material-ui/core";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTeamThunk } from "../../../../store/modules/teams/thunk";

import { IsValidState } from "../../../global/IsValidState/index";

export const TitleHeader = ({ teamData, isLogged }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipOpenThunk = () => {
    setOpen(true);
    setTimeout(() => {
      handleTooltipClose();
    }, 2000);
  };

  let isTeamOwner = false;

  const { teamName, id, playersId } = teamData;
  const isTeamOwnerId = teamData.userId;

  const loggedUserId = JSON.parse(window.localStorage.getItem("users"))
    ?.loggedUser?.users?.id;

  // Verificação se o usuario logado é o dono do Time
  if (isLogged) {
    if (isTeamOwnerId === loggedUserId) {
      isTeamOwner = true;
    }
  }

  let userIsAlreadyInTeam = false;

  if (IsValidState(teamData)) {
    userIsAlreadyInTeam = teamData?.playersId.some(
      (playersId) => playersId === loggedUserId
    );
  } else {
    userIsAlreadyInTeam = false;
  }

  const handleEnterTeam = () => {
    console.log(
      !teamData.playersId.some((playersId) => playersId === loggedUserId)
    );

    if (teamData.playersId.some((playersId) => playersId === loggedUserId)) {
      handleTooltipOpen();
      setTimeout(() => {
        handleTooltipClose();
      }, 2000);
    } else {
      let newPlayersId = {
        playersId: [...playersId, loggedUserId],
      };
      console.log(newPlayersId);
      dispatch(updateTeamThunk(id, newPlayersId, handleTooltipOpenThunk));

      setTimeout(() => {
        document.location.reload();
      }, 2000);
    }
  };

  return (
    <Box component="div" className={classes.titleHeader}>
      <Box component="div" className={classes.titleContainer}>
        <Typography
          variant="h1"
          component="h1"
          align="left"
          className={classes.mainTitle}
        >
          {teamName}
        </Typography>
      </Box>
      <Box component="div" className={classes.editButtonContainer}>
        {isLogged && isTeamOwner && (
          <Box>
            <Button
              color="primary"
              variant="contained"
              className={classes.editButtonContainer}
            >
              Editar
            </Button>
          </Box>
        )}
        {isLogged && !userIsAlreadyInTeam && (
          <Tooltip open={open} title="Ocorreu um erro no Cadastro">
            <Box className={classes.signinButtonContainer}>
              <Button
                onClick={handleEnterTeam}
                color="primary"
                variant="contained"
              >
                Entrar no Time
              </Button>
            </Box>
          </Tooltip>
        )}
        {isLogged && userIsAlreadyInTeam && (
          <Tooltip
            open={open}
            onClose={handleTooltipClose}
            onOpen={handleTooltipOpen}
            title="Jogador já Cadastrado"
          >
            <Box className={classes.signinButtonContainer}>
              <Button
                onClick={handleEnterTeam}
                color="primary"
                variant="contained"
                disabled
              >
                Já é Membro
              </Button>
            </Box>
          </Tooltip>
        )}
        {!isLogged && (
          <Tooltip
            open={open}
            onClose={handleTooltipClose}
            onOpen={handleTooltipOpen}
            title="Você precisa estar logado para acessar esse Recurso"
          >
            <Box className={classes.signinButtonContainer}>
              <Button
                onClick={handleEnterTeam}
                color="primary"
                variant="contained"
                disabled
              >
                Entrar no Time
              </Button>
            </Box>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};
