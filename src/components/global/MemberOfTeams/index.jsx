import axios from "axios";
import React, { useEffect, useState } from "react";
import TeamCard from "../TeamCard";

const URL_TEAM = "http://localhost:3001/teams?id=2&id=1";

const MemberOfTeams = ({ firstName, lastName }) => {
  const [teamList, setTeamList] = useState([]);

  const getTeamsList = () => {
    axios.get(URL_TEAM).then((body) => {
      setTeamList(body.data);
    });
  };
  useEffect(getTeamsList, []);

  return <TeamCard list={teamList} />;
};

export default MemberOfTeams;
