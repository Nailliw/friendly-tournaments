import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  FormControl,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { updateUserThunk } from "../../../store/modules/users/thunk";
import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const EditUser = ({ id, firstName, lastName, bio, email, invites }) => {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <Card className={classes.userRoot}>
        <CardHeader title={firstName + " " + lastName} subheader={bio} />
        <CardContent>
          <Typography variant="body2">Email: {email}</Typography>
        </CardContent>

        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          <EditIcon />
        </Button>
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
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Edit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="body2">
            Fazer um Card pros times que estão invitando e dar a opção que
            entrar pro time
            <div>Id dos times que deram invite = {invites}</div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default EditUser;
