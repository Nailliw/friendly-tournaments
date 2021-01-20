import { UPDATE_USERS } from "./actionsType";
const initialState = {
  loggedUser: {
    authToken: "",
    token: "",
    users: {},
  },
  isLogged: false,
  selectedUser: {},
  usersList: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};
