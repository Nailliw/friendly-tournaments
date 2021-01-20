import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  FormHelperText,
  TextField,
  Select,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core/";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerUserThunk } from "../../../../store/modules/users/thunk";

import { useStyles } from "./style/styles";

export const RegisterUserPopup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const users = useSelector((state) => state.UsersReducer);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [open, setOpen] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 dígitos")
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    firstName: yup
      .string()
      .min(3, "Nome deve conter no mínimo 3 letras")
      .required("Campo obrigatório"),
    lastName: yup
      .string()
      .min(3, "Sobrenome deve conter no mínimo 3 letras")
      .required("Campo obrigatório"),
    nickName: yup
      .string()
      .min(3, "Apelido deve conter no mínimo 3 letras")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
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
    delete formData.password_confirmation;
    const newUser = {
      ...formData,
      memberOfTeams: [],
      tournamentsWon: [],
    };

    dispatch(registerUserThunk(newUser, setError, setRegisterSuccess));
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Cadastro de Usuario
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
        <DialogTitle id="form-dialog-title">Cadastrar-se</DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit(handleForm)}>
            <Box>
              <TextField
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
            <Box>
              <TextField
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
            <Box>
              <TextField
                variant="outlined"
                label="Repita a senha"
                name="password_confirmation"
                margin="dense"
                type="password"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password_confirmation?.message}
              />
            </Box>
            <Box>
              <TextField
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
            <Box>
              <TextField
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
            <Box>
              <TextField
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
            <Box>
              <TextField
                multiline
                rowsMax={4}
                variant="outlined"
                label="
        Biografia"
                name="bio"
                margin="dense"
                type="string"
                inputRef={register}
                error={!!errors.bio}
                helperText={errors.bio?.message}
              />
            </Box>

            <Box className={classes.formBottom}>
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
                className={classes.registerButton}
                type="submit"
                color="primary"
                variant="contained"
              >
                Cadastrar
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
        </DialogContent>
      </Dialog>
    </Box>
  );
};
