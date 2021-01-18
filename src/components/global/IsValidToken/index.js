const unixTimestamp = require("unix-timestamp");

export const IsValidToken = () => {
  const expirationTimestamp =
    JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .expirationTimestamp || false;

  if (!expirationTimestamp) return false;

  unixTimestamp.round = true;
  const currentTimestamp = unixTimestamp.now();

  if (expirationTimestamp > currentTimestamp) return true;

  if (expirationTimestamp < currentTimestamp) return false;

  return false;
};
