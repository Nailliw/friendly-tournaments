import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams, Link, useLocation } from "react-router-dom";

import { updateTeamListThunk } from "../../store/modules/teams/thunk";
// import { updateCategoriesListThunk } from "../../store/modules/categories/thunk";

import { IsValidState } from "../../components/global/IsValidState";

import { CardTeam } from "../../components/global/CardTeam";
import "./style.css";

import { useStyles } from "./styles";

import { LinearProgress, Box } from "@material-ui/core";

export const Teams = ({ token, setToken }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.TeamsReducer);
  // let urlFilter = new URLSearchParams(useLocation().search);

  useEffect(() => {
    dispatch(updateTeamListThunk());
  }, [dispatch]);

  return (
    <>
      {IsValidState(teams) ? (
        <div className="tournamentsContainer">
          {IsValidState(teams.teamsList) && (
            <div className="tournamentsList">
              {teams.teamsList.map((team, index) => {
                return <CardTeam key={index} team={team} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <Box component="div" className={classes.tournamentInfoRoot}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};
