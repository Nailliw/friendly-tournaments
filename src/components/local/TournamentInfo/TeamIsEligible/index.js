import { IsValidState } from "../../../global/IsValidState";

export const TeamIsEligible = (teamData, tournamentData) => {
  let dataInscricao = new Date(tournamentData.deadline);
  let dataHoje = Date.now();

  if (!IsValidState(teamData) || !IsValidState(tournamentData)) {
    return false;
  }

  if (dataInscricao < dataHoje) {
    return false;
  }

  if (tournamentData.teamsSize !== teamData.playersId.length) {
    return false;
  }

  if (tournamentData.numberOfTeams <= tournamentData.teamsData.length) {
    return false;
  }

  if (
    tournamentData.teamsData.some((team) => {
      return team.id === teamData.id;
    })
  ) {
    return false;
  }

  return true;
};
