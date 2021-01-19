import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  FormHelperText,
  TextField,
  Select,
  Button,
} from "@material-ui/core/";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerTournamentThunk } from "../../store/modules/tournaments/thunk";

import { useStyles } from "./style/styles";

import { IsValidToken } from "../../components/global/IsValidToken";

export const RegisterTournament = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const classes = useStyles();
  const users = useSelector((state) => state.UsersReducer);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const schema = yup.object().shape({
    category: yup.string().required("Campo obrigatório"),
    title: yup
      .string()
      .min(3, "Titulo deve conter no mínimo 3 dígitos")
      .required("Campo obrigatório"),
    info: yup.string().required("Campo obrigatório"),
    numberOfTeams: yup
      .number("Deve conter um numero")
      .min(2, "O Campeonato deve conter no minimo 4times")
      .required("Campo obrigatório"),
    teamSize: yup
      .number()
      .min(1, "O time deve conter no minimo um integrante")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  // const [tournamentName, setTournamentName] = useState("");
  // const [teamsSize, setTeamsSize] = useState("");
  // const [dataTorneio, setDataTorneio] = useState("");

  // const handleDate = (event) => {
  //   setDataTorneio(event.target.value);
  // };

  // const handleTournamentName = (event) => {
  //   setTournamentName(event.target.value);
  // };

  // const handleTeamsSize = (event) => {
  //   setTeamsSize(event.target.value);
  // };

  // const handleRegisterTournament = (event) => {
  //   const tournamentData = {
  //     game: tournamentName,
  //     teamsSize: Number(teamsSize),
  //     teamsId: [],
  //     inGame: [],
  //     matches: [],
  //     status: "",
  //     deadline: dataTorneio,
  //     userId: Number(
  //       JSON.parse(window.localStorage.getItem("users")).loggedUser.user.sub
  //     ),
  //   };
  //   dispatch(registerTournamentThunk(tournamentData));
  // };

  const handleForm = (formData) => {
    console.log(formData);

    if (IsValidToken()) {
      console.log(newTournament);

      const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
        .users.id;

      const newTournament = {
        ...formData,
        teamsData: [],
        // gameName:
        remainingTeams: [],
        matches: [],
        status: "Esperando Times",
        tournamentWinner: [],
        // deadline:
        userId: Number(userId),
      };

      dispatch(registerTournamentThunk(newTournament));
    }
  };

  return (
    <Box>
      <form
        className={classes.formRegister}
        onSubmit={handleSubmit(handleForm)}
      >
        <Box className={classes.formInfo}>
          <Typography
            className={classes.labelCadastro}
            component="h3"
            variant="h3"
          >
            Cadastro de Campeonato
          </Typography>
        </Box>
        <Box className={classes.inputArea}>
          <Box className={classes.inputField}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Titulo"
              name="title"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.title}
              helperText={errors.title?.message}
            ></TextField>
          </Box>
          <Box className={classes.inputFieldRow}>
            <TextField
              className={classes.input}
              multiline
              rows={2}
              rowsMax={20}
              variant="outlined"
              label="
        Informações"
              name="info"
              margin="dense"
              type="string"
              inputRef={register}
              error={!!errors.info}
              helperText={errors.info?.message}
            />
          </Box>
          <FormControl className={classes.select}>
            <InputLabel
              variant="outlined"
              margin="dense"
              size="small"
              error={!!errors.numberOfTeams}
              id="numberOfTeams"
            >
              N. maximo de Times
            </InputLabel>
            <Select
              error={!!errors.numberOfTeams}
              native={true}
              name="numberOfTeams"
              inputRef={register}
              labelId="numberOfTeams"
              label="N. maximo de Times"
              margin="dense"
              size="small"
              variant="outlined"
            >
              <option value={0}></option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </Select>
            <FormHelperText style={{ color: "red" }}>
              {errors.numberOfTeams?.message}
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel
              variant="outlined"
              margin="dense"
              size="small"
              error={!!errors.teamSize}
              id="teamSize"
            >
              Jogadores por Equipe(max)
            </InputLabel>
            <Select
              error={!!errors.teamSize}
              native={true}
              name="teamSize"
              inputRef={register}
              labelId="teamSize"
              label="Jogadores por Equipe(max)"
              margin="dense"
              size="small"
              variant="outlined"
            >
              <option value={0}></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={7}>7</option>
              <option value={10}>10</option>
            </Select>
            <FormHelperText style={{ color: "red" }}>
              {errors.teamSize?.message}
            </FormHelperText>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel
              variant="outlined"
              margin="dense"
              size="small"
              error={!!errors.category}
              id="category"
            >
              Categoria
            </InputLabel>
            <Select
              error={!!errors.category}
              native={true}
              name="category"
              inputRef={register}
              labelId="category"
              label="Categoria"
              margin="dense"
              size="small"
              variant="outlined"
            >
              <option value=""></option>
              <option value="1">League of Legends</option>
              <option value="2">Dota</option>
              <option value="3">Fortnite</option>
              <option value="4">Counter Strike</option>
            </Select>
            <FormHelperText style={{ color: "red" }}>
              {errors.category?.message}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box className={classes.formBottom}>
          <Button
            type="submit"
            className={classes.registerButton}
            variant="outlined"
          >
            Cadastrar Torneio
          </Button>
          <div className={classes.feedbackMessage}>
            {registerSuccess ? (
              <h2 style={{ color: "rgb(8,53,108)", textAlign: "center" }}>
                Registro Concluído
              </h2>
            ) : (
              <h2 style={{ color: "red", textAlign: "center" }}>
                {errors.registerError?.message}
              </h2>
            )}
          </div>
        </Box>
      </form>
    </Box>
  );
};
