import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem } from "@material-ui/core";

const URL_BASE = "http://localhost:3001/";

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
      <div>
        <h2>Tournament Disputed:</h2>
        <div>
          {tournamentsDisputedList.map(({ title, status, info, id }) => (
            <List key={id} subheader={title}>
              <ListItem>{info}</ListItem>
              <ListItem>Tournament status: {status}</ListItem>
              <ListItem>Winner</ListItem>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTournament;
