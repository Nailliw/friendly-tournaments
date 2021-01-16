import { UPDATE_CATEGORIES } from "./actionsType";
const initialState = {
  selectedCategory: {},
  categoriesList: [],
};

export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      const { newState } = action;
      return newState;
    default:
      return state;
  }
};
