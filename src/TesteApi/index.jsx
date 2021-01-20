import { useState, useEffect } from "react";
import { CardTeam } from "../components/global/CardTeam";
import { TeamIsEligible } from "../components/local/TournamentInfo/TeamIsEligible";
import { CardMessages } from "../components/global/CardMessages";
import { Message } from "../components/global/CardMessages/Message";
export const TesteApi = () => {
  const team = {
    teamName: "LA Eagles",
    teamInfo: "League of Legends Team based in Los Angeles",
    playersId: [1, 2, 3],
    tournamentsWon: [1, 3],
    tournamentsDisputed: [1, 2, 3],
    userId: 1,
    id: 2,
  };

  // useEffect(() => {}, []);
  // console.log(TeamIsEligible(1, 6));

  const message = {
    name: "Felipe",
    message:
      "Aliquam non justo in neque suscipit sodales. Curabitur ipsum sem, semper eget ligula vitae, tempus pretium sem. Aliquam at metus nunc. Duis congue lacus sed facilisis condimentum. Integer maximus nibh a sapien gravida, nec gravida nisl bibendum. Mauris leo risus, bibendum in ultricies a, pharetra quis felis. Duis sit amet tempus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <>
      <CardMessages tournamentId={2} />
    </>
  );
};
