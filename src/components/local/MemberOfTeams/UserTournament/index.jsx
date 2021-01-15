import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const URL_BASE = "http://localhost:3001/";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const tournamentCard = {
  width: "40vh",
  margin: "5px",
  backgroundColor: "#3d4351",
  color: "white",
};

const UserTournament = ({ tournamentsDisputed, tournamentsWon }) => {
  const [tournamentsDisputedList, setTournamentsDisputedList] = useState([]);

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
    <div>
      <h2>Tournament Disputed</h2>
      <div style={containerStyle}>
        {tournamentsDisputedList.map(({ title, status, info, id }) => (
          <Card style={tournamentCard} key={id}>
            <CardHeader title={title} />
            <CardContent>
              <div>{info}</div>
              <div>{status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTournament;
