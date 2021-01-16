import { UPDATE_TOURNAMENTS } from "./actionsType";
const initialState = {
  selectedTournament: {},
  filteredTournamentsList: [],
  tournamentsList: [],
};

export const TournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOURNAMENTS:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};
