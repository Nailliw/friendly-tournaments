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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerTeamThunk } from "../../store/modules/teams/thunk";
import { updateUsersListThunk } from "../../store/modules/users/thunk";

import { useStyles } from "./style/styles";

export const RegisterTeam = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const classes = useStyles();

  const schema = yup.object().shape({
    teamName: yup.string().required("Campo obrigatório"),
    teamInfo: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateTeam = () => {
    const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .user.sub;
    const teamData = {
      playersId: [Number(userId)],
      userId: Number(userId),
    };
    dispatch(registerTeamThunk(teamData));
  };

  const handleForm = (formData) => {
    const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .users.id;
    const teamData = {
      ...formData,
      playersId: [Number(userId)],
      userId: Number(userId),
    };

    console.log(teamData);
  };

  useEffect(() => {
    dispatch(updateUsersListThunk());
  }, []);
  return (
    <Box>
      <form
        className={classes.formRegister}
        onSubmit={handleSubmit(handleForm)}
      >
        <Box className={classes.formInfo}>
          <Typography
            className={classes.labelCadastro}
            component="h3"
            variant="h3"
          >
            Crie sua Equipe
          </Typography>
        </Box>
        <Box className={classes.inputField}>
          <TextField
            className={classes.input}
            variant="outlined"
            label="Nome da Equipe"
            name="teamName"
            margin="dense"
            type="string"
            inputRef={register}
            error={!!errors.teamName}
            helperText={errors.teamName?.message}
          ></TextField>
        </Box>
        <Box className={classes.inputFieldRow}>
          <TextField
            className={classes.input}
            multiline
            rows={3}
            rowsMax={20}
            variant="outlined"
            label="
        Informações"
            name="teamInfo"
            margin="dense"
            type="string"
            inputRef={register}
            error={!!errors.teamInfo}
            helperText={errors.teamInfo?.message}
          />
        </Box>
        <Box className={classes.formBottom}>
          <Button
            type="submit"
            className={classes.registerButton}
            variant="outlined"
          >
            Criar Time
          </Button>
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
        </Box>
      </form>
    </Box>
  );
};
