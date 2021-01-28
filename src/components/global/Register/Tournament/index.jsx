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
  Typography,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useStyles } from "./style/styles";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateIsLoggedThunk } from "../../../../store/modules/users/thunk";
import { registerTournamentThunk } from "../../../../store/modules/tournaments/thunk";

import { IsValidToken } from "../../../global/IsValidToken";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterTournamentPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
  }, [dispatch]);

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    if (registerSuccess) setRegisterSuccess(false);

    if (registerFailed) setRegisterFailed(false);

    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    if (registerSuccess || registerFailed) window.location.reload();
  };

  const schema = yup.object().shape({
    category: yup.string().required("Jogo deve ser Especificado"),
    title: yup
      .string()
      .min(3, "Titulo deve conter no mínimo 3 caracteres")
      .max(30, "Titulo deve conter no máximo 30 caracteres")
      .required("Um Título deve ser Especificado"),
    info: yup
      .string()
      .min(5, "As Informações devem conter no mínimo 5 caracteres")
      .max(200, "As Informações devem conter no máximo 200 caracteres")
      .required("Uma Informação deve ser Definida"),
    numberOfTeams: yup
      .string()
      .required("O Campeonato deve conter no mínimo 2 times"),
    teamsSize: yup
      .string()
      .required("O time deve conter no mínimo um Integrante"),
    deadline: yup.string().required("Data do Torneio deve ser Especificada"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const categoryNames = [
    "Jogo não Definido",
    "Xadrez",
    "League of Legends",
    "World of Warcraft",
    "Retro",
    "Outros",
  ];

  const handleForm = (formData) => {
    if (IsValidToken()) {
      let userId = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
        ?.users?.id;

      userId = Number(userId);
      const teamsSize = Number(formData.teamsSize);
      const category = Number(formData.category);

      const title = formData.title.trim();
      const info = formData.info.trim();
      const gameName = categoryNames[category];

      const newTournament = {
        ...formData,
        category,
        gameName,
        title,
        info,
        userId,
        teamsSize,
        status: "Período de Inscrições",
        messagesList: [],
        teamsData: [],
        remainingTeams: [],
        matches: [],
        tournamentWinner: [],
      };

      dispatch(
        registerTournamentThunk(
          newTournament,
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
        className={classes.createTournament}
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="small"
      >
        Criar Torneio
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          classes: {
            root: classes.dialogConteiner,
          },
        }}
      >
        <Box className={classes.imgLogin} />

        <Box className={classes.form}>
          <DialogContent className={classes.FormInput}>
            <form
              className={classes.formRegister}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.formInfo}>
                <DialogTitle id="form-dialog-title">
                  <Typography
                    variant="h5"
                    component="p"
                    className={classes.labelCadastro}
                  >
                    Registrar Torneio
                  </Typography>
                </DialogTitle>
              </Box>

              <Box component="div" className={classes.formSection}>
                <Box component="div" className={classes.inputField}>
                  <TextField
                    autoComplete="off"
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

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    multiline
                    rows={2}
                    rowsMax={4}
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

                <FormControl className={classes.inputFieldDate}>
                  <TextField
                    autoComplete="off"
                    name="deadline"
                    id="datetime-local"
                    label="Prazo de Inscrição"
                    type="datetime-local"
                    variant="outlined"
                    inputRef={register}
                    error={!!errors.deadline}
                    helperText={errors.deadline?.message}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>

                <FormControl className={classes.InputSelect}>
                  <InputLabel
                    variant="outlined"
                    margin="dense"
                    size="small"
                    error={!!errors.category}
                    id="category"
                  >
                    Nome do Jogo
                  </InputLabel>
                  <Select
                    error={!!errors.category}
                    native={true}
                    name="category"
                    inputRef={register}
                    labelId="category"
                    label="Nome do Jogo"
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

                <FormControl className={classes.InputSelect}>
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
                    <option value=""></option>
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

                <FormControl className={classes.InputSelect}>
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
                    <option value=""></option>
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
              </Box>

              <DialogActions className={classes.formBottom}>
                <Box className={classes.boxButton}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={handleClose}
                  >
                    Fechar
                  </Button>

                  <Button type="submit" color="primary" variant="contained">
                    Criar
                  </Button>
                </Box>

                <Box component="div" className={classes.feedbackMessage}>
                  {registerSuccess && (
                    <Alert severity="success">
                      <AlertTitle>Torneio cadastrado com Sucesso!</AlertTitle>
                      Você pode ver o Status e Editá-lo na Página do Torneio que
                      pode ser acessada a partir do seu Perfil.
                    </Alert>
                  )}

                  {registerFailed && (
                    <Alert severity="error">
                      <AlertTitle>
                        Não foi possível cadastrar seu Torneio
                      </AlertTitle>
                      Verifique se está logado e tente novamente mais tarde.
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
