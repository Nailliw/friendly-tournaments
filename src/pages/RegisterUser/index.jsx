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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerUserThunk } from "../../store/modules/users/thunk";

import { useStyles } from "./style/styles";

export const RegisterUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const users = useSelector((state) => state.UsersReducer);
  const [registerSuccess, setRegisterSuccess] = useState(false);

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

  const handleForm = (formData) => {
    console.log(formData);
    delete formData.password_confirmation;
    const newUser = {
      ...formData,
      memberOfTeams: [],
      tournamentsWon: [],
    };
    console.log(newUser);
    dispatch(registerUserThunk(newUser, setError, setRegisterSuccess));
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <Box>
      <form
        className={classes.formRegister}
        onSubmit={handleSubmit(handleForm)}
      >
        <Box className={classes.formInfo}>
          {/* form info */}
          <Typography
            className={classes.labelCadastro}
            component="h3"
            variant="h3"
          >
            Cadastro de Usuário
          </Typography>
        </Box>
        <Box className={classes.inputArea}>
          <Box className={classes.inputField}>
            <TextField
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
              className={classes.input}
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
          <Box className={classes.inputField}>
            <TextField
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
              className={classes.input}
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
        </Box>
        <Box className={classes.formBottom}>
          <Button
            className={classes.registerButton}
            type="submit"
            variant="outlined"
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
    </Box>
  );
};
