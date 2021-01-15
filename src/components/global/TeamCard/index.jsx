import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

const TeamCard = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map(
        ({ teamName, teamInfo, tournamentsWon, tournamentsDisputed, id }) => (
          <Card key={id}>
            <CardHeader title={teamName} subheader={teamInfo} />
            <CardContent>
              <div>campeonatos disputados:{tournamentsDisputed}</div>
              <div>Ganhei os campeonatos: {tournamentsWon}</div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};

export default TeamCard;
