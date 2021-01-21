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

export const LoginPopup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const users = useSelector((state) => state.UsersReducer);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
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
    dispatch(loginUserThunk(loginData, setError));
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
        <DialogTitle id="form-dialog-title">Entrar</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleForm)}>
            <Box>
              <TextField
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
            <Box>
              <TextField
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

            <DialogActions>
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
              <div className={classes.feedbackMessage}>
                <h2 style={{ color: "red", textAlign: "center" }}>
                  {errors.userLogin?.message}
                </h2>
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
