import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUserThunk,
  updateUsersListThunk,
} from "../../store/modules/users/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector((state) => state.UsersReducer);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

<<<<<<< HEAD
  const handleForm = (data) => {
    console.log(data);
=======
  const handleLogin = () => {
    const loginData = {
      email,
      password: senha,
    };
    dispatch(loginUserThunk(loginData));
>>>>>>> ca67098ebebde76e4eef35c988d8220506b50247
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(handleForm)}>
        <Box>
          {/*input area*/}
          <Box>
            {/*input field*/}
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
            {/*input field*/}
            <TextField
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
        <Box>
          {/*button area*/}
          <Button type="submit" variant="outlined">
            Logar
          </Button>
        </Box>
      </form>
    </Box>
  );
};
