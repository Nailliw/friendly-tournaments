import { Button, CardActions, Card, CardHeader } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTeamListThunk } from "../../../../../store/modules/teams/thunk";
import { updateTeamThunk } from "../../../../../store/modules/teams/thunk";
import { getTeamInfoThunk } from "../../../../../store/modules/teams/thunk";

import { updateUserThunk } from "../../../../../store/modules/users/thunk";
import { updateUsersListThunk } from "../../../../../store/modules/users/thunk";

import { IsValidState } from "../../../../global/IsValidState";
import { IsValidToken } from "../../../../global/IsValidToken";

import { useStyles } from "./styles";

const TeamInvite = ({ teamId, memberOfTeams }) => {
  const { teamsList } = useSelector((state) => state.TeamsReducer);

  const { playersId } = useSelector((state) => state.TeamsReducer.selectedTeam);

  const [team, setTeam] = useState([]);
  const { loggedUser } = JSON.parse(window.localStorage.getItem("users"));
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleAcept = () => {
    if (IsValidToken()) {
      const invites = loggedUser.users.invites.filter(
        (item) => item !== teamId
      );

      dispatch(updateUserThunk(loggedUser.users.id, { invites }));
      dispatch(updateUsersListThunk());
    }

    dispatch(updateUserThunk(loggedUser.users.id, { memberOfTeams }));

    // // mandar um dispatch pra edição do time
  };
  const handleRefuse = () => {
    if (IsValidToken(loggedUser.authToken.headers.Authorization)) {
      const invites = loggedUser.users.invites.filter(
        (item) => item !== teamId
      );

      dispatch(updateUserThunk(loggedUser.users.id, { invites }));
      dispatch(updateUsersListThunk());
    }

    dispatch(getTeamInfoThunk(teamId));
    // dispatch(updateTeamThunk(teamId, { playersId }));
  };

  useEffect(() => {
    dispatch(updateTeamListThunk());
  }, []);

  useEffect(() => {
    if (IsValidState(teamsList)) {
      setTeam(
        teamsList.filter((item) => {
          return item.id === teamId;
        })[0]
      );
    }
  }, [teamsList]);

  return (
    <>
      {loggedUser.users.invites.length !== 0 ? (
        <>
          {IsValidState(team) && (
            <Card className={classes.inviteCard}>
              <CardHeader title={team.teamName} subheader="Convites" />
              <CardActions>
                <Button
                  onClick={handleRefuse}
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Recusar
                </Button>
                <Button
                  onClick={handleAcept}
                  variant="contained"
                  color="primary"
                >
                  Aceitar
                </Button>
              </CardActions>
            </Card>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TeamInvite;
