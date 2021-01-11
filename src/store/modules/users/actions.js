import { UPDATE_USERS } from "./actionsType";

export const updateUsers = (newState) => ({
  type: UPDATE_USERS,
  newState: newState,
});
