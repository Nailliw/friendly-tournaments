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

import { updateUserThunk } from "../../../store/modules/users/thunk";
import { IsValidToken } from "../../global/IsValidToken";

const EditUser = ({ id, firstName, lastName, bio, email, invites }) => {
  const [open, setOpen] = useState(false);
  const [validOwner, setValidOwner] = useState(false);
  const loggedUser = JSON.parse(window.localStorage.getItem("users"));
  let { userID } = useParams();

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Min 3 characters")
      .required("Required field"),
    lastName: yup.string().required("Required field"),
    bio: yup.string().max(280, "Max 280 characters"),
    email: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    dispatch(updateUserThunk(register.id, register));
    setOpen(false);
  };

  useEffect(() => {
    if (IsValidToken(loggedUser?.loggedUser.token)) {
      if (loggedUser?.loggedUser.users.id === Number(userID)) {
        setValidOwner(true);
      }
    }
  }, []);

  return (
    <>
      <Card className={classes.userRoot}>
        <CardHeader title={firstName + " " + lastName} subheader={bio} />
        <CardContent>
          <Typography variant="body2">Email: {email}</Typography>
        </CardContent>
        {validOwner === true ? (
          <Button
            variant="outlined"
            style={{ backgroundColor: "#E99F0C" }}
            onClick={handleClickOpen}
          >
            <EditIcon />
          </Button>
        ) : (
          <div></div>
        )}

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
                    label="First name"
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
                  label="Last name"
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
                  label="Biography"
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
                style={{ marginRight: "2rem", backgroundColor: "#C15FFF" }}
                onClick={handleClose}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Edit
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
