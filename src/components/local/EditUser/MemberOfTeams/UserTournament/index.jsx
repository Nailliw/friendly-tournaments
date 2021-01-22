import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../../styles";

const URL_BASE = "http://localhost:3001/";

const UserTournament = ({ tournamentsDisputed, tournamentsWon }) => {
  const [tournamentsDisputedList, setTournamentsDisputedList] = useState([]);
  const classes = useStyles();

  const getTournamentsDisputed = () => {
    let stringTournament = `tournaments?`;
    for (let index = 0; index < tournamentsDisputed.length; index++) {
      stringTournament = stringTournament + `&id=${tournamentsDisputed[index]}`;
    }
    axios.get(`${URL_BASE}${stringTournament}`).then((body) => {
      setTournamentsDisputedList(body.data);
    });
  };
  useEffect(getTournamentsDisputed, []);

  return (
    <>
      <h2>Tournament Disputed</h2>
      <div className={classes.containerTournamentCard}>
        {tournamentsDisputedList.map(({ title, status, info, id }) => (
          <Card className={classes.tournamentCard} key={id}>
            <Typography
              style={{ backgroundColor: "#353a46" }}
              align={"center"}
              color="#fff"
            >
              {title}
            </Typography>

            <CardContent>
              <div>{info}</div>
              <div>{status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UserTournament;
