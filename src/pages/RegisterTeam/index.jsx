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
import { updateIsLoggedThunk } from "../../store/modules/users/thunk";
import { updateUsersListThunk } from "../../store/modules/users/thunk";
import { IsValidToken } from "../../components/global/IsValidToken";
import { useStyles } from "./style/styles";

import { RegisterTeamPopup } from "../../components/global/Register/Team/index";

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
    dispatch(updateIsLoggedThunk());
    dispatch(updateUsersListThunk());
  }, []);

  return (
    <Box>
      <RegisterTeamPopup></RegisterTeamPopup>
      {/* <form
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
      </form> */}
    </Box>
  );
};
