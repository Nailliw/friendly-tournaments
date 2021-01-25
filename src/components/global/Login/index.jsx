import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useStyles } from "./style/styles";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  loginUserThunk,
  updateIsLoggedThunk,
} from "../../../store/modules/users/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const LoginPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    if (loginSuccess) setLoginSuccess(false);

    if (loginFailed) setLoginFailed(false);

    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    if (setLoginSuccess || setLoginFailed) dispatch(updateIsLoggedThunk());
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Um Email válido deve ser fornecido"),
    password: yup
      .string()
      .required("Senha de no Mínimo 6 dígitos deve ser fornecida"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (loginData) => {
    dispatch(loginUserThunk(loginData, setLoginSuccess, setLoginFailed));
  };

  return (
    <Box>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="small"
      >
        Entrar
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
              className={classes.formLogin}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.formInfo}>
                <DialogTitle id="form-dialog-title">
                  <Typography
                    variant="h5"
                    component="p"
                    className={classes.labelLogin}
                  >
                    Entrar
                  </Typography>
                </DialogTitle>
              </Box>

              <Box component="div" className={classes.formSection}>
                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Email"
                    name="email"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    className={classes.input}
                    autoComplete="off"
                    variant="outlined"
                    label="Senha"
                    name="password"
                    margin="dense"
                    inputRef={register}
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Box>
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

                  <Button type="submit" variant="contained" color="primary">
                    Entrar
                  </Button>
                </Box>

                <Box component="div" className={classes.feedbackMessage}>
                  {loginSuccess && (
                    <Alert severity="success">
                      <AlertTitle>
                        Suas Credenciais foram Autorizadas com Sucesso!
                      </AlertTitle>
                      Você já pode acessar as Funcionalidades relacionadas ao
                      seu Perfil.
                    </Alert>
                  )}

                  {loginFailed && (
                    <Alert severity="error">
                      <AlertTitle>
                        Não foi possível Autenticar o seu Usuário!
                      </AlertTitle>
                      Verifique se os Dados estão corretos e tente novamente
                      mais tarde.
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
