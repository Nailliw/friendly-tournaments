import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

import { useDispatch, useSelector } from "react-redux";
import { getFilteredTeamListThunk } from "../../../../store/modules/teams/thunk";
import { useParams } from "react-router-dom";

const MemberOfTeams = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let teamList = "";
    function getQuery(item) {
      teamList = teamList + `&id=${item}`;
    }
    data.memberOfTeams.forEach(getQuery);

    dispatch(getFilteredTeamListThunk(teamList));
  }, []);

  return <TeamCard userId={data.id} memberOfTeams={data.memberOfTeams} />;
};

export default MemberOfTeams;
