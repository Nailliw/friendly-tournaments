import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@material-ui/core";
import { useStyles } from "./styles";
import {
  updateTournamentThunk,
  updateTournamentsListThunk,
} from "../../../../store/modules/tournaments/thunk";
import { updateUsersListThunk } from "../../../../store/modules/users/thunk";
import { updateTeamListThunk } from "../../../../store/modules/teams/thunk";

import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IsValidState } from "../../../global/IsValidState";
import { TeamIsEligible } from "../../../local/TournamentInfo/TeamIsEligible";

export const SubscribeTeam = ({ tournamentId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const teams = useSelector((state) => state.TeamsReducer);
  const [userTeams, setUserTeams] = useState([]);
  const [tournamentToSubscribe, setTournamentToSubscribe] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const schema = yup.object().shape({
    userTeams: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
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
    console.log(newTournament);
    dispatch(updateTournamentThunk(tournamentId, newTournament));
    setOpen(true);
  };

  useEffect(() => {
    dispatch(updateUsersListThunk());
    dispatch(updateTeamListThunk());
    dispatch(updateTournamentsListThunk());
  }, []);

  useEffect(() => {
    if (
      IsValidState(users) &&
      IsValidState(teams) &&
      IsValidState(tournamentToSubscribe)
    ) {
      setUserTeams(
        teams.teamsList.filter((team) => {
          console.log(tournamentToSubscribe);
          if (TeamIsEligible(team, tournamentToSubscribe)) {
            return team.userId === users.loggedUser.users.id;
          }
          return false;
        })
      );
    }
    console.log(users);
    console.log(teams);
  }, [users, teams, tournamentToSubscribe]);

  useEffect(() => {
    if (IsValidState(tournaments)) {
      setTournamentToSubscribe(
        tournaments.tournamentsList.filter((tournament) => {
          console.log(tournament);
          return tournament.id === tournamentId;
        })[0]
      );
    }
    console.log(tournaments);
  }, [tournaments]);

  useEffect(() => {
    console.log(tournamentToSubscribe);
  }, [tournamentToSubscribe]);

  useEffect(() => {
    console.log(userTeams);
  }, [userTeams]);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Inscrever
      </Button>

      {IsValidState(tournamentToSubscribe) && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
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
              <FormControl>
                <InputLabel
                  variant="outlined"
                  margin="dense"
                  size="small"
                  id="userTeams"
                >
                  Select team
                </InputLabel>
                <Select
                  error={!!errors.category}
                  native={true}
                  name="userTeams"
                  inputRef={register}
                  labelId="userTeams"
                  label="Select team"
                  margin="dense"
                  size="small"
                  variant="outlined"
                >
                  {userTeams.map((team) => {
                    return (
                      <option value={JSON.stringify(team)}>
                        {team.teamName}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <p></p>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Subscribe Team
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
