import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

const TeamCard = ({ list }) => {
  return (
    <div>
      {list.map(({ teamName, teamInfo }) => (
        <Card>
          <CardHeader title={teamName} subheader={teamInfo} />
          <CardContent></CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeamCard;
