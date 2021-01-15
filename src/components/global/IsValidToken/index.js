const unixTimestamp = require("unix-timestamp");

export const IsValidToken = () => {
  const {
    loggedUser: {
      user: { exp },
    },
  } = JSON.parse(window.localStorage.getItem("users"));
  const expirationTimestamp = exp;

  unixTimestamp.round = true;
  const currentTimestamp = unixTimestamp.now();

  if (expirationTimestamp > currentTimestamp) return true;
  if (expirationTimestamp < currentTimestamp) return false;

  return false;
};
