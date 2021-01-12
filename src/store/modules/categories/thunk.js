import { updateCategories } from "./actions";
import { api } from "../../../services/api";

export const registerCategoryThunk = (categoryData) => {
  return (dispatch, getState) => {
    const categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("categories"))
      .loggedUser.authToken;

    api
      .post("/categories", categoryData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateCategoriesThunk = (categoryId, categoryData) => {
  return (dispatch, getState) => {
    const categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .patch(`/categories/${categoryId}`, categoryData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateCategoriesListThunk = () => {
  return (dispatch, getState) => {
    let categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .get(`/categories`, authToken)
      .then((res) => {
        categories = { ...categories, categoriesList: res.data };
        console.log(categories);

        window.localStorage.setItem("categories", categories);

        dispatch(updateCategories(categories));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
