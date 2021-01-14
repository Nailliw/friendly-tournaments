import axios from "axios";
import { useEffect, useState } from "react";

const URL_BASE = "http://localhost:3001"

export const PersonalTeams = () => {
const [teams, setTeams] = useState([])

    const getTeams = () => {
        axios.get(URL_BASE + "/teams").then((body) => {
            setTeams(body.data)
        });
      };
      useEffect(getTeams, []);
      console.log(teams)
  return (
    <>


</>
  );
};
