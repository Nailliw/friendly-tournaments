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

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../../store/modules/users/actions";
import {
  updateUserThunk,
  updateUsersListThunk,
} from "../../store/modules/users/thunk";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const EditUser = ({ firstName, lastName, bio, email, invites }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    firstname: yup.string().required("Required field"),
    lastname: yup.string().required("Required field"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    console.log(register);
  };

  return (
    <Card>
      <CardHeader title={firstName + " " + lastName} subheader={bio} />
      <CardContent>
        <Typography variant="body2" component="p">
          Email: {email}
        </Typography>
        <Typography variant="body2" component="p">
          Id dos times que deram invite = {invites}
        </Typography>
      </CardContent>

      <div>
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
                <TextField
                  autoFocus
                  name="firstname"
                  margin="dense"
                  label="First name"
                  type="string"
                  defaultValue={firstName}
                  inputRef={register}
                  fullWidth
                />
                <TextField
                  name="lastname"
                  margin="dense"
                  label="Last name"
                  type="string"
                  defaultValue={lastName}
                  inputRef={register}
                  fullWidth
                />
                <TextField
                  name="bio"
                  margin="dense"
                  label="Biography"
                  type="string"
                  defaultValue={bio}
                  inputRef={register}
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
                  fullWidth
                />
              </FormControl>

              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose} color="primary">
                Edit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};
export default EditUser;
