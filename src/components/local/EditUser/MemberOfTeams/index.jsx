import axios from "axios";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const URL_BASE = "http://localhost:3001/";

const MemberOfTeams = ({ data }) => {
  const [teamList, setTeamList] = useState([]);

  const getTeamsList = () => {
    let stringTeam = `teams?`;
    for (let index = 0; index < data.memberOfTeams.length; index++) {
      stringTeam = stringTeam + `&id=${data.memberOfTeams[index]}`;
    }
    axios.get(`${URL_BASE}${stringTeam}`).then((body) => {
      setTeamList(body.data);
    });
  };
  console.log(data);
  useEffect(getTeamsList, []);

  return (
    <div>
      <TeamCard
        memberOfTeams={data.memberOfTeams}
        userName={data.firstName}
        userId={data.id}
        list={teamList}
      />
    </div>
  );
};

export default MemberOfTeams;
