import {
  Box,
  Button,
  TextField,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Draggable,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  loginUserThunk,
  updateUsersListThunk,
} from "../../../store/modules/users/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";

import { useStyles } from "./style/styles";
import { IsValidState } from "../../global/IsValidState";
import { IsValidToken } from "../IsValidToken";

export const LoginPopup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const users = useSelector((state) => state.UsersReducer);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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

  const handleForm = (loginData) => {
    console.log(loginData);
    dispatch(loginUserThunk(loginData, setErrorMessage));

    setTimeout(() => {
      if (!IsValidToken()) {
        setErrorMessage("Email / Senha inválidos");
      }
    }, 1000);
  };

  return (
    <Box>
      <Button
        className={classes.loginbuttonstyle}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Login
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
        <Box className={classes.imgLogin}></Box>
        <Box className={classes.form}>
          <Box className={classes.formInfo}>
            <DialogTitle id="form-dialog-title">Entrar</DialogTitle>
          </Box>
          <DialogContent className={classes.FormInput}>
            <form
              className={classes.formLogin}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.inputField}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
                  variant="outlined"
                  label="Email"
                  name="email"
                  margin="dense"
                  type="string"
                  inputRef={register}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                />
              </Box>
              <Box className={classes.inputField}>
                <TextField
                  className={classes.input}
                  autoComplete="off"
                  autoFocus
                  variant="outlined"
                  label="Senha"
                  name="password"
                  margin="dense"
                  inputRef={register}
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                />
              </Box>

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
                    variant="contained"
                    color="primary"
                  >
                    Logar
                  </Button>
                </Box>
                <div className={classes.feedbackMessage}>
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "0px",
                    }}
                  >
                    {errorMessage}
                  </p>
                </div>
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};
