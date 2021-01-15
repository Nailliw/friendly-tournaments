import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@material-ui/core";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import React from "react";
import UserTournament from "../UserTournament";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: 300,
};
const containerTeam = {
  backgroundColor: "#353a46",
};

const TeamCard = ({ list }) => {
  return (
    <div>
      {list.map(
        ({ teamName, teamInfo, tournamentsWon, tournamentsDisputed, id }) => (
          <div style={containerTeam}>
            <div key={id} style={containerStyle}>
              <Accordion>
                <AccordionSummary>
                  <h1>{teamName}</h1>
                </AccordionSummary>
                <AccordionActions>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </AccordionActions>
                <AccordionDetails>
                  <UserTournament
                    tournamentsDisputed={tournamentsDisputed}
                    tournamentsWon={tournamentsWon}
                  />
                </AccordionDetails>
              </Accordion>

              {/* USUÁRIO LOGADO COM BOTÃO PARA SAIR DO TIME */}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TeamCard;
