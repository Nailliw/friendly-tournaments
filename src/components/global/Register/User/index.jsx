import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import { Alert, AlertTitle } from "@material-ui/lab";

import { useStyles } from "./style/styles";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateIsLoggedThunk } from "../../../../store/modules/users/thunk";
import { registerUserThunk } from "../../../../store/modules/users/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterUserPopup = () => {
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
    email: yup
      .string()
      .email("Email inválido")
      .required("Um Email válido deve ser fornecido"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Senha de no Mínimo 6 dígitos deve ser criada"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    firstName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .max(10, "Seu primeiro Nome deve conter no máximo 10 caracteres")
      .required(
        "Seu primeiro Nome com no Mínimo 3 caracteres deve ser Fornecido"
      ),
    lastName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .max(10, "Seu Sobrenome deve conter no máximo 10 caracteres")
      .required("Seu Sobrenome com no Mínimo 3 caracteres deve ser Fornecido"),
    nickName: yup
      .string()
      .min(3, "Mínimo 3 letras")
      .max(10, "Seu Apelido deve conter no máximo 10 caracteres")
      .required("Campo obrigatório"),
    bio: yup
      .string()
      .min(5, "Sua Biografia deve conter no mínimo 5 caracteres")
      .max(200, "Sua Biografia deve conter no máximo 200 caracteres")
      .required(
        "Uma Biografia de no Mínimo 5 e Máximo de 200 caracteres deve ser Fornecida"
      ),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (formData) => {
    delete formData.password_confirmation;

    // const password = formData.email.trim();
    const firstName = formData.email.trim();
    const lastName = formData.email.trim();
    const nickName = formData.email.trim();
    const bio = formData.email.trim();

    const newUser = {
      ...formData,
      // password,
      firstName,
      lastName,
      nickName,
      bio,
      invites: [],
      memberOfTeams: [],
      tournamentsWon: [],
    };

    dispatch(registerUserThunk(newUser, setRegisterSuccess, setRegisterFailed));
  };

  return (
    <Box>
      <Button
        className={classes.createUserButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
        size="small"
      >
        Cadastro de Usuario
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
                    Cadastrar-se
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
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Senha"
                    name="password"
                    margin="dense"
                    type="password"
                    inputRef={register}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Repita a Senha"
                    name="password_confirmation"
                    margin="dense"
                    type="password"
                    inputRef={register}
                    error={!!errors.password}
                    helperText={errors.password_confirmation?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Nome"
                    name="firstName"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Sobrenome"
                    name="lastName"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    variant="outlined"
                    label="Apelido"
                    name="nickName"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.nickName}
                    helperText={errors.nickName?.message}
                  />
                </Box>

                <Box className={classes.inputField}>
                  <TextField
                    autoComplete="off"
                    className={classes.input}
                    multiline
                    rows={2}
                    rowsMax={4}
                    variant="outlined"
                    label="Biografia"
                    name="bio"
                    margin="dense"
                    type="string"
                    inputRef={register}
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
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

                  <Button type="submit" color="primary" variant="contained">
                    Criar
                  </Button>
                </Box>

                <Box component="div" className={classes.feedbackMessage}>
                  {registerSuccess && (
                    <Alert severity="success">
                      <AlertTitle>Usúario cadastrado com Sucesso!</AlertTitle>
                      Agora Você pode Criar ou se tornar Membro de Equipes e
                      Torneios!
                    </Alert>
                  )}

                  {registerFailed && (
                    <Alert severity="error">
                      <AlertTitle>
                        Não foi possível cadastrar seu Usúario!
                      </AlertTitle>
                      Verifique se os Dados estão corretos ou tente novamente
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
