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
  Box,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { updateTeamThunk } from "../../../store/modules/teams/thunk";
import { updateUsersListThunk } from "../../../store/modules/users/thunk";

import { useState, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IsValidState } from "../../global/IsValidState";

export const EditTeam = ({ id, teamName, teamInfo }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    teamName: yup.string().required("Required field"),
    teamInfo: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (register) => {
    console.log(register);
    dispatch(updateTeamThunk(id, register));
    setOpen(false);
    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  useEffect(() => {
    dispatch(updateUsersListThunk());
  }, []);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<EditIcon />}
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
            root: classes.editTeam,
          },
        }}
      >
        <DialogTitle id="form-dialog-title">Editar Time</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleForm)}>
            <FormControl>
              <div>
                <TextField
                  autoFocus
                  name="teamName"
                  margin="dense"
                  label="Nome do Time"
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
                  name="teamInfo"
                  margin="dense"
                  label="Info do Time"
                  type="string"
                  defaultValue={teamInfo}
                  inputRef={register}
                  error={!!errors.teamInfo}
                  helperText={errors.teamInfo?.message}
                  fullWidth
                />
              </div>
            </FormControl>
            <Box className={classes.buttonsTeamEdit}>
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
    </>
  );
};
