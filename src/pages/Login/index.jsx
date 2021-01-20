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

import { useStyles } from "./styles/styles";

import { LoginPopup } from "../../components/global/Login/index";

export const Login = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const classes = useStyles();

  // const users = useSelector((state) => state.UsersReducer);

  // const schema = yup.object().shape({
  //   email: yup.string().email().required("Campo obrigatório"),
  //   password: yup.string().required("Campo obrigatório"),
  // });

  // const { register, handleSubmit, errors, setError } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const handleForm = (loginData) => {
  //   console.log(loginData);
  //   dispatch(loginUserThunk(loginData, setError));
  // };

  return (
    <Box>
      <LoginPopup />
      {/* <form className={classes.formLogin} onSubmit={handleSubmit(handleForm)}>
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
              inputRef={register}
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
        </Box>
        <Box className={classes.formBottom}>
          {/*button area*/}
      {/* <Button
            className={classes.loginButton}
            type="submit"
            variant="outlined"
          >
            Logar
          </Button>
          <div className={classes.feedbackMessage}>
            <h2 style={{ color: "red", textAlign: "center" }}>
              {errors.userLogin?.message}
            </h2>
          </div>
        </Box>
      </form> */}
    </Box>
  );
};
