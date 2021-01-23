import {
  Box,
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
import { Alert, AlertTitle } from "@material-ui/lab";

import { useStyles } from "./style/styles";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateIsLoggedThunk } from "../../../../store/modules/users/thunk";
import { registerTournamentThunk } from "../../../../store/modules/tournaments/thunk";

// import { IsValidToken } from "../../../global/IsValidToken";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterTournamentPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
  }, [dispatch]);

  const isLogged = useSelector(({ UsersReducer: { isLogged } }) => isLogged);
  console.log(isLogged);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (registerSuccess) setRegisterSuccess(false);

    if (registerFailed) setRegisterFailed(false);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (registerSuccess || registerFailed) window.location.reload();
  };

  const schema = yup.object().shape({
    category: yup.string().required("Campo obrigatório"),
    title: yup
      .string()
      .min(3, "Titulo deve conter no mínimo 3 dígitos")
      .required("Campo obrigatório"),
    info: yup.string().required("Campo obrigatório"),
    numberOfTeams: yup
      .number("Deve conter um número")
      .min(2, "O Campeonato deve conter no mínimo 4 times")
      .required("Campo obrigatório"),
    teamsSize: yup
      .number()
      .min(1, "O time deve conter no mínimo um Integrante")
      .required("Campo obrigatório"),
    deadline: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // setTimeout(() => {
  //   window.location.reload();
  // }, 3000);

  const categoryNames = [
    "",
    " Xadrez",
    "League of Legends",
    "World of Warcraft",
    "Retro",
    "Outros",
  ];

  const handleForm = (formData) => {
    console.log(isLogged);

    if (isLogged) {
      let userId = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
        ?.users?.id;

      userId = Number(userId);
      const teamsSize = Number(formData.teamsSize);
      const category = Number(formData.category);

      const gameName = categoryNames[category];

      const newTournament = {
        ...formData,
        category,
        gameName,
        userId,
        teamsSize,
        status: "Período de Inscrições",
        messagesList: [],
        teamsData: [],
        remainingTeams: [],
        matches: [],
        tournamentWinner: [],
      };

      console.log(newTournament);

      dispatch(
        registerTournamentThunk(
          newTournament,
          setOpen,
          setRegisterSuccess,
          setRegisterFailed
        )
      );
    } else {
      setRegisterFailed(true);

      setTimeout(() => {
        dispatch(updateIsLoggedThunk());
      }, 10000);
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
        <Box className={classes.imgLogin} />

        <Box className={classes.form}>
          <Box className={classes.formInfo}>
            <DialogTitle
              id="form-dialog-title"
              className={classes.labelCadastro}
            >
              Registrar Torneio
            </DialogTitle>
          </Box>

          <DialogContent className={classes.FormInput}>
            <form
              className={classes.formRegister}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.inputField}>
                <TextField
                  autoComplete="off"
                  // className={classes.input}
                  autoFocus
                  variant="outlined"
                  label="Titulo"
                  name="title"
                  margin="dense"
                  type="string"
                  inputRef={register}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  InputProps={{
                    classes: {
                      root: classes.input,
                    },
                  }}
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
                  N. máximo de Times
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
                  error={!!errors.teamsSize}
                  id="teamsSize"
                >
                  Jogadores por Equipe
                </InputLabel>
                <Select
                  error={!!errors.teamsSize}
                  native={true}
                  name="teamsSize"
                  inputRef={register}
                  labelId="teamsSize"
                  label="Jogadores por Equipe"
                  margin="dense"
                  size="small"
                  variant="outlined"
                >
                  <option value={0}></option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
                <FormHelperText style={{ color: "red" }}>
                  {errors.teamsSize?.message}
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
                  <option value={1}>Xadrez</option>
                  <option value={2}>League of Legends</option>
                  <option value={3}>World of Warcraft</option>
                  <option value={4}>Retro</option>
                  <option value={5}>Outros</option>
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
                <Box component="div" className={classes.feedbackMessage}>
                  {/* {registerSuccess && (
                      <Alert severity="success">
                        <AlertTitle>Torneio cadastrado com Sucesso!</AlertTitle>
                        Você pode ver o Status e Editá-lo na Página do Torneio
                        que pode ser acessada a partir do seu Perfil.
                      </Alert>
                  )} */}
                  {/* registerFailed */}
                  {registerSuccess && (
                    <Alert severity="error">
                      <AlertTitle>
                        Não foi possível cadastrar seu Torneio
                      </AlertTitle>
                      Verifique se está logado e e tente novamente mais tarde.
                    </Alert>
                  )}
                </Box>
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};
