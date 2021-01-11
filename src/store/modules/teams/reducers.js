import { UPDATE_TEAMS } from "./actionsType";
const initialState = {
  selectedTeam: {},
  teamsList: [],
};

export const TeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAMS:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};
