export const IsValidState = (state) => {
  if (
    state !== "" &&
    state !== null &&
    state !== undefined &&
    JSON.stringify(state) !== "{}" &&
    JSON.stringify(state) !== "[]"
  ) {
    return true;
  } else {
    return false;
  }
};
