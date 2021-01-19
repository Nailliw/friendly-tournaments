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

export const RegisterUser = () => {
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
      >
        <DialogTitle id="form-dialog-title">Cadastro de Usuario </DialogTitle>
      </Dialog>
    </Box>
  );
};
