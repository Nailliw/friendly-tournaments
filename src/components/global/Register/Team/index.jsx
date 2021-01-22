import {
  Box,
  Typography,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormHelperText,
  TextField,
  Select,
  Button,
} from "@material-ui/core/";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registerTeamThunk } from "../../../../store/modules/teams/thunk";
import { updateUsersListThunk } from "../../../../store/modules/users/thunk";
import { IsValidToken } from "../../../../components/global/IsValidToken";
import { useStyles } from "./style/styles";

export const RegisterTeamPopup = () => {
  const dispatch = useDispatch();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const schema = yup.object().shape({
    teamName: yup.string().required("Campo obrigatório"),
    teamInfo: yup.string().required("Campo obrigatório"),
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
    if (IsValidToken()) {
      const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
        .users.id;

      const teamData = {
        playersId: [],
        tournamentsWon: [],
        tournamentsDisputed: [],
        userId: Number(userId),
      };

      dispatch(registerTeamThunk(teamData));
    }
  };

  useEffect(() => {
    dispatch(updateUsersListThunk());
  }, []);

  return (
    <Box style={{ height: "100%" }}>
      <Button
        className={classes.createTeam}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Criar Time
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
            <DialogTitle id="form-dialog-title">Registrar Equipe</DialogTitle>
          </Box>

          <DialogContent className={classes.FormInput}>
            <form
              className={classes.formRegister}
              onSubmit={handleSubmit(handleForm)}
            >
              <Box className={classes.inputField}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
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
              <Box className={classes.inputFieldRow}>
                <TextField
                  autoComplete="off"
                  className={classes.input}
                  autoFocus
                  multiline
                  rows={3}
                  rowsMax={20}
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
                    color="primary"
                    variant="contained"
                  >
                    Criar
                  </Button>
                </Box>
                <div className={classes.feedbackMessage}>
                  {registerSuccess ? (
                    <h2 style={{ color: "rgb(8,53,108)", textAlign: "center" }}>
                      Equipe Criada
                    </h2>
                  ) : (
                    <h2 style={{ color: "red", textAlign: "center" }}>
                      {errors.registerError?.message}
                    </h2>
                  )}
                </div>
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};
