import { UPDATE_TEAMS } from "./actionsType";

export const updateTeams = (newState) => ({
  type: UPDATE_TEAMS,
  newState: newState,
});
