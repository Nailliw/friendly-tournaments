import { useState, useEffect } from "react";
import { Bracket, RoundProps } from "react-brackets";
import { CardTeam } from "../components/global/CardTeam";

export const TesteApi = () => {
  const rounds = [
    {
      title: "Round 1",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round 2",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }],
        },
      ],
    },
  ];

  const team = {
    teamName: "LA Eagles",
    teamInfo: "League of Legends Team based in Los Angeles",
    playersId: [1, 2, 3],
    tournamentsWon: [1, 3],
    tournamentsDisputed: [1, 2, 3],
    userId: 1,
    id: 2,
  };

  return (
    <>
      <CardTeam team={team} />
      {/* <Bracket rounds={rounds} /> */}
    </>
  );
};
