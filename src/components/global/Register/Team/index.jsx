import {
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useStyles } from "./style/styles";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateIsLoggedThunk } from "../../../../store/modules/users/thunk";
import { registerTeamThunk } from "../../../../store/modules/teams/thunk";

import { IsValidToken } from "../../../../components/global/IsValidToken";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterTeamPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateIsLoggedThunk());
  }, [dispatch]);

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    if (registerSuccess) setRegisterSuccess(false);

    if (registerFailed) setRegisterFailed(false);

    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    if (registerSuccess || registerFailed) window.location.reload();
  };

  const schema = yup.object().shape({
    teamName: yup
      .string()
      .min(3, "Nome do Time deve conter no mínimo 3 caracteres")
      .max(30, "Nome do Time deve conter no máximo 30 caracteres")
      .required("Nome do Time deve ser Especificado"),
    teamInfo: yup
      .string()
      .min(5, "As Informações do Time devem conter no mínimo 5 caracteres")
      .max(200, "As Informações do Time devem conter no máximo 200 caracteres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (formData) => {
    if (IsValidToken()) {
      let userId = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
        ?.users?.id;

      userId = Number(userId);
      const teamName = formData.teamName.trim();
      const teamInfo = formData.teamInfo.trim();

      const newTeamData = {
        ...formData,
        teamName,
        teamInfo,
        userId,
        playersId: [],
        tournamentsWon: [],
        tournamentsDisputed: [],
      };

      dispatch(
        registerTeamThunk(newTeamData, setRegisterSuccess, setRegisterFailed)
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
        className={classes.createTeam}
        variant="contained"
        color="primary"
        onClick={handleDialogOpen}
        size="small"
      >
        Criar Time
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
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
                    Registrar Equipe
                  </Typography>
                </DialogTitle>
              </Box>

              <Box component="div" className={classes.formSection}>
                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    variant="outlined"
                    label="Nome da Equipe"
                    name="teamName"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.teamName}
                    helperText={errors.teamName?.message}
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
                    name="teamInfo"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.teamInfo}
                    helperText={errors.teamInfo?.message}
                  />
                </Box>
              </Box>

              <DialogActions className={classes.formBottom}>
                <Box className={classes.boxButton}>
                  <Button
                    className={classes.loginButton}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={handleDialogClose}
                  >
                    Fechar
                  </Button>
                  <Button
                    className={classes.loginButton}
                    type="submit"
                    color="primary"
                    variant="contained"
                  >
                    Criar
                  </Button>
                </Box>

                <Box component="div" className={classes.feedbackMessage}>
                  {registerSuccess && (
                    <Alert severity="success">
                      <AlertTitle>Equipe cadastrada com Sucesso!</AlertTitle>
                      Você pode ver o Status e Editá-la na Página da Equipe que
                      pode ser acessada a partir do seu Perfil.
                    </Alert>
                  )}

                  {registerFailed && (
                    <Alert severity="error">
                      <AlertTitle>
                        Não foi possível cadastrar sua Equipe!
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
