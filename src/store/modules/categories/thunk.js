import { updateCategories } from "./actions";
import { api } from "../../../services/api";

export const registerCategoryThunk = (categoryData) => {
  return (_dispatch, _getState) => {
    //const categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

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

export const selectCategoryThunk = (categoryId) => {
  return (dispatch, getState) => {
    let categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/categories/${categoryId}`, authToken)
      .then((res) => {
        categories = { ...categories, selectedCategory: res.data };
        console.log(categories);
        dispatch(updateCategories(categories));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateCategoriesThunk = (categoryId, categoryData) => {
  return (_dispatch, _getState) => {
    //const categories = getState().CategoriesReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
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
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/categories`, authToken)
      .then((res) => {
        categories = { ...categories, categoriesList: res.data };
        console.log(categories);

        dispatch(updateCategories(categories));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
