import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormHelperText,
  TextField,
  Select,
  Button,
} from "@material-ui/core/";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerTournamentThunk } from "../../../../store/modules/tournaments/thunk";
import { useStyles } from "./style/styles";

import { IsValidToken } from "../../../global/IsValidToken";

export const RegisterTournamentPopup = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [open, setOpen] = useState(false);

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
    deadline: yup.string().required("Campo obrigatório"),
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

  const handleForm = (formData) => {
    console.log(formData);

    if (IsValidToken()) {
      const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
        .users.id;

      const newTournament = {
        ...formData,
        teamsData: [],
        gameName: formData.category,
        remainingTeams: [],
        matches: [],
        status: "Esperando Times",
        tournamentWinner: [],
        userId: Number(userId),
      };

      dispatch(registerTournamentThunk(newTournament, setOpen));
    }
  };

  return (
    <Box>
      <Button
        className={classes.createtournament}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Criar Torneio
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.dialogRoot,
          },
        }}
        PaperProps={{
          classes: {
            root: classes.dialogConteiner,
          },
        }}
      >
        <Box className={classes.imgLogin}></Box>
        <Box className={classes.form}>
          <Box className={classes.formInfo}>
            <DialogTitle id="form-dialog-title">Registrar Torneio</DialogTitle>
          </Box>

          <DialogContent className={classes.FormInput}>
            <form
              className={classes.formRegister}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.inputField}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
                  variant="outlined"
                  label="Titulo"
                  name="title"
                  margin="dense"
                  type="string"
                  inputRef={register}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </Box>
              <Box className={classes.inputFieldRow}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
                  multiline
                  rows={20}
                  rowsMax={2}
                  variant="outlined"
                  label="Informações"
                  name="info"
                  margin="dense"
                  type="string"
                  inputRef={register}
                  error={!!errors.info}
                  helperText={errors.info?.message}
                />
              </Box>
              <Box className={classes.inputFieldRow}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
                  name="deadline"
                  id="datetime-local"
                  label="Deadline Inscription"
                  type="datetime-local"
                  variant="outlined"
                  inputRef={register}
                  error={!!errors.deadline}
                  helperText={errors.deadline?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  Jogadores por Equipe (max)
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
                  <option value="League of Legends">League of Legends</option>
                  <option value="Dota">Dota</option>
                  <option value="Fortnite">Fortnite</option>
                  <option value="Counter Strike">Counter Strike</option>
                </Select>
                <FormHelperText style={{ color: "red" }}>
                  {errors.category?.message}
                </FormHelperText>
              </FormControl>

              <DialogActions className={classes.formBottom}>
                <Box className={classes.boxButton}>
                  <Button
                    // className={classes.loginButton}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={handleClose}
                  >
                    Fechar
                  </Button>
                  <Button
                    // className={classes.loginButton}
                    type="submit"
                    color="primary"
                    variant="contained"
                  >
                    Criar
                  </Button>
                </Box>
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
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};
