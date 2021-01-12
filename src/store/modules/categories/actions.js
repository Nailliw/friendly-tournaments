import { UPDATE_CATEGORIES } from "./actionsType";

export const updateCategories = (newState) => ({
  type: UPDATE_CATEGORIES,
  newState: newState,
});
