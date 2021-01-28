import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import { Box, FormControl } from "@material-ui/core";
import { useStyles } from "./styles";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTournamentThunk } from "../../../store/modules/tournaments/thunk";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const EditTournament = ({ id, title, info, deadline, status }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

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
    dispatch(updateTournamentThunk(id, register));
    setOpen(false);

    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  return (
    <Box>
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
        BackdropProps={{
          classes: {
            root: classes.root,
          },
        }}
        PaperProps={{
          classes: {
            root: classes.editTournament,
          },
        }}
      >
        <DialogTitle id="form-dialog-title">Editar Torneio</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleForm)} id={"editTournament"}>
            <FormControl>
              <div>
                <TextField
                  autoFocus
                  name="title"
                  margin="dense"
                  label="Título"
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
                  label="Info do Torneio"
                  type="string"
                  multiline
                  rows={2}
                  rowsMax={4}
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
                label="Data Limite de Inscrição"
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
            <Box className={classes.buttonsTourneyEdit}>
              <Button
                variant="outlined"
                size="small"
                onClick={handleClose}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Editar
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
