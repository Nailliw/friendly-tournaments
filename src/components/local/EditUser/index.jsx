import EditIcon from "@material-ui/icons/Edit";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
  Typography,
  CardContent,
  CardHeader,
  FormControl,
} from "@material-ui/core";
import TeamInvite from "./MemberOfTeams/TeamInvite";
import { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  updateUserThunk,
  getUserInfoThunk,
} from "../../../store/modules/users/thunk";
import { IsValidToken } from "../../global/IsValidToken";

const EditUser = ({ id, firstName, lastName, bio, email }) => {
  const [open, setOpen] = useState(false);
  const [validOwner, setValidOwner] = useState(false);
  const loggedUser = JSON.parse(window.localStorage.getItem("users"));
  const users = useSelector((state) => state.UsersReducer);
  let { userID } = useParams();

  const dispatch = useDispatch();
  const classes = useStyles();
  const invites = users?.loggedUser?.users?.invites;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .max(10, "Seu primeiro Nome deve conter no máximo 10 caracteres")
      .required(
        "Seu primeiro Nome com no Mínimo 3 caracteres deve ser Fornecido"
      ),
    lastName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .max(10, "Seu Sobrenome deve conter no máximo 10 caracteres")
      .required("Seu Sobrenome com no Mínimo 3 caracteres deve ser Fornecido"),
    bio: yup
      .string()
      .min(5, "Sua Biografia deve conter no mínimo 5 caracteres")
      .max(200, "Sua Biografia deve conter no máximo 200 caracteres")
      .required(
        "Uma Biografia de no Mínimo 5 e Máximo de 200 caracteres deve ser Fornecida"
      ),
    email: yup
      .string()
      .email("Email inválido")
      .required("Um Email válido deve ser fornecido"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    dispatch(updateUserThunk(register.id, register));
    setOpen(false);
  };

  useEffect(() => {
    if (IsValidToken(loggedUser?.loggedUser?.token)) {
      if (loggedUser?.loggedUser?.users?.id === Number(userID)) {
        setValidOwner(true);
      }
    }
  }, []);

  useEffect(() => {
    dispatch(getUserInfoThunk(id));
  }, []);

  return (
    <>
      <Card className={classes.userRoot}>
        <CardHeader title={firstName + " " + lastName} subheader={bio} />
        <CardContent>
          <Typography variant="body2">Email: {email}</Typography>
          {validOwner === true ? (
            <Button
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#E99F0C" }}
              onClick={handleClickOpen}
            >
              <EditIcon />
            </Button>
          ) : (
            <div></div>
          )}
        </CardContent>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edite seus Dados</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(handleForm)} id={"editUser"}>
              <FormControl>
                <div>
                  <TextField
                    className={classes.formUserID}
                    autoFocus
                    name="id"
                    margin="dense"
                    label="ID"
                    type="number"
                    defaultValue={id}
                    inputRef={register}
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    name="firstName"
                    margin="dense"
                    label="Nome"
                    type="string"
                    defaultValue={firstName}
                    inputRef={register}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    fullWidth
                  />
                </div>

                <TextField
                  name="lastName"
                  margin="dense"
                  label="Sobrenome"
                  type="string"
                  defaultValue={lastName}
                  inputRef={register}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                />
                <TextField
                  name="bio"
                  margin="dense"
                  label="Biografia"
                  type="string"
                  defaultValue={bio}
                  inputRef={register}
                  error={!!errors.bio}
                  helperText={errors.bio?.message}
                  fullWidth
                />
                <TextField
                  name="email"
                  margin="dense"
                  id="email"
                  label="Email"
                  type="string"
                  defaultValue={email}
                  inputRef={register}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                />
              </FormControl>
              <p style={{ color: "red" }}>{errors.firstName?.message}</p>
              <Button
                style={{ marginRight: "2rem" }}
                onClick={handleClose}
                variant="outlined"
                color="secondary"
                size="small"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Editar
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Card>
      {invites?.length !== 0 ? (
        <>
          {validOwner === true ? (
            <Card className={classes.userRoot}>
              <CardContent>
                <div className={classes.cardInviteContainer}>
                  {invites?.map((id) => (
                    <TeamInvite key={id} teamId={id} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <Card className={classes.userRoot}>
          <CardContent>
            <div className={classes.cardInviteContainer}>
              Não há convites no momento
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
export default EditUser;
