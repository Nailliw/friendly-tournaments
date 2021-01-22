import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import { FormControl, Select, InputLabel, Box } from "@material-ui/core";
import { useStyles } from "./styles";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateTournamentThunk,
  updateTournamentsListThunk,
} from "../../../../store/modules/tournaments/thunk";

import { updateUsersListThunk } from "../../../../store/modules/users/thunk";
import { updateTeamListThunk } from "../../../../store/modules/teams/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IsValidState } from "../../../global/IsValidState";
import { TeamIsEligible } from "../../../local/TournamentInfo/TeamIsEligible";

export const SubscribeTeam = ({ tournamentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.UsersReducer);
  const teams = useSelector((state) => state.TeamsReducer);
  const tournaments = useSelector((state) => state.TournamentsReducer);

  const [open, setOpen] = useState(false);
  const [userTeams, setUserTeams] = useState([]);
  const [tournamentToSubscribe, setTournamentToSubscribe] = useState([]);

  useEffect(() => {
    dispatch(updateUsersListThunk());
    dispatch(updateTeamListThunk());
    dispatch(updateTournamentsListThunk());
  }, [dispatch]);

  useEffect(() => {
    if (
      IsValidState(users) &&
      IsValidState(teams) &&
      IsValidState(tournamentToSubscribe)
    ) {
      setUserTeams(
        teams.teamsList.filter((team) => {
          if (TeamIsEligible(team, tournamentToSubscribe)) {
            return team.userId === users.loggedUser.users.id;
          }
          return false;
        })
      );
    }
  }, [users, teams, tournamentToSubscribe]);

  useEffect(() => {
    if (IsValidState(tournaments)) {
      setTournamentToSubscribe(
        tournaments.tournamentsList.filter((tournament) => {
          return tournament.id === tournamentId;
        })[0]
      );
    }
  }, [tournaments, dispatch, tournamentId]);

  useEffect(() => {}, [tournamentToSubscribe]);

  useEffect(() => {}, [userTeams]);

  const schema = yup.object().shape({
    userTeams: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForm = (register) => {
    const newTeam = JSON.parse(register.userTeams);
    const newTournament = {
      ...tournamentToSubscribe,
      teamsData: [...tournamentToSubscribe.teamsData, newTeam],
    };

    dispatch(updateTournamentThunk(tournamentId, newTournament));
    setOpen(false);

    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  return (
    <Box className={classes.subTeamBox}>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<EditIcon />}
      >
        Inscrever Time
      </Button>

      {IsValidState(tournamentToSubscribe) && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          BackdropProps={{
            classes: {
              root: classes.subTeamRoot,
            },
          }}
          PaperProps={{
            classes: {
              root: classes.subTeamContainer,
            },
          }}
        >
          <DialogTitle id="form-dialog-title">Inscrever no Torneio</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(handleForm)}>
              {IsValidState(tournamentToSubscribe.title) && (
                <Box className={classes.title}>
                  {tournamentToSubscribe.title}
                </Box>
              )}
              {IsValidState(tournamentToSubscribe.info) && (
                <Box className={classes.info}>{tournamentToSubscribe.info}</Box>
              )}
              <Box className={classes.subTeamSelect}>
                <FormControl>
                  <InputLabel
                    variant="outlined"
                    margin="dense"
                    size="small"
                    id="userTeams"
                  >
                    Selecionar Time
                  </InputLabel>
                  <Select
                    error={!!errors.category}
                    native={true}
                    name="userTeams"
                    inputRef={register}
                    labelId="userTeams"
                    label="Selecione o Time"
                    margin="dense"
                    size="small"
                    variant="outlined"
                  >
                    {userTeams.map((team, index) => {
                      return (
                        <option key={index} value={JSON.stringify(team)}>
                          {team.teamName}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box className={classes.subTeamButtons}>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="secondary"
                  size="small"
                >
                  Fechar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Inscrever
                </Button>
              </Box>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};
