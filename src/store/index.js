import { createStore, combineReducers, applyMiddleware } from "redux";
import { UsersReducer } from "./modules/users/reducers";
import { TeamsReducer } from "./modules/teams/reducers";
import { TournamentsReducer } from "./modules/tournaments/reducers";

import thunk from "redux-thunk";

const reducers = combineReducers({
  UsersReducer,
  TeamsReducer,
  TournamentsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
