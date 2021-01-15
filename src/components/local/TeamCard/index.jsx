import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import UserTournament from "../UserTournament";

const TeamCard = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map(
        ({ teamName, teamInfo, tournamentsWon, tournamentsDisputed, id }) => (
          <Card key={id}>
            <CardHeader title={teamName} subheader={teamInfo} />
            <CardContent>
              <UserTournament
                tournamentsDisputed={tournamentsDisputed}
                tournamentsWon={tournamentsWon}
              />
              {/* USUÁRIO LOGADO COM BOTÃO PARA SAIR DO TIME */}
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};

export default TeamCard;
