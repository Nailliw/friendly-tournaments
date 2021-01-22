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
import { updateTeamThunk } from "../../../store/modules/teams/thunk";
import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const EditTeam = ({ id, teamName, teamInfo }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
    info: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    console.log(register);
    dispatch(updateTeamThunk(id, register));
    setOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Edit Team
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Team Data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleForm)} id={"editTournament"}>
            <FormControl>
              <div>
                <TextField
                  autoFocus
                  name="title"
                  margin="dense"
                  label="Title"
                  type="string"
                  defaultValue={teamName}
                  inputRef={register}
                  error={!!errors.teamName}
                  helperText={errors.teamName?.message}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  name="info"
                  margin="dense"
                  label="Info"
                  type="string"
                  defaultValue={teamInfo}
                  inputRef={register}
                  error={!!errors.teamInfo}
                  helperText={errors.teamInfo?.message}
                  fullWidth
                />
              </div>
            </FormControl>
            <p></p>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Edit Team
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
