import { UPDATE_TOURNAMENTS } from "./actionsType";

export const updateTournaments = (newState) => ({
  type: UPDATE_TOURNAMENTS,
  newState: newState,
});
