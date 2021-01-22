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
import { updateTournamentThunk } from "../../../store/modules/tournaments/thunk";
import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const EditTournament = ({
  id,
  userId,
  category,
  gameName,
  title,
  info,
  numberOfTeams,
  teamsSize,
  messagesList,
  teamsData,
  tournamentWinner,
  deadline,
  status,
}) => {
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
    title: yup.string().required("Required field"),
    info: yup.string().required("Required field"),
    status: yup.string().required("Required field"),
    deadline: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    console.log(register);
    dispatch(updateTournamentThunk(id, register));
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
        Editar
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edite os Dados do Torneio
        </DialogTitle>
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
                  defaultValue={title}
                  inputRef={register}
                  error={!!errors.title}
                  helperText={errors.title?.message}
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
                  defaultValue={info}
                  inputRef={register}
                  error={!!errors.info}
                  helperText={errors.info?.message}
                  fullWidth
                />
              </div>

              <TextField
                name="status"
                margin="dense"
                label="Status"
                type="string"
                defaultValue={status}
                inputRef={register}
                error={!!errors.status}
                helperText={errors.status?.message}
                fullWidth
              />
              <TextField
                name="deadline"
                id="datetime-local"
                label="Deadline Inscription"
                type="datetime-local"
                defaultValue={deadline}
                inputRef={register}
                error={!!errors.deadline}
                helperText={errors.deadline?.message}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <p></p>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Edit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
