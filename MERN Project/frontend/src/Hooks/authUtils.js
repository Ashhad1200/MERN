import { jwtDecode } from "jwt-decode";

// Check if the token has expired
export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const expirationTime = decoded.exp * 1000; // Convert to milliseconds
    return Date.now() >= expirationTime; // Return true if expired
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // In case of any error, consider the token expired
  }
};

// Schedule the refresh of the token before it expires
export const scheduleTokenRefresh = (refreshToken, refreshCallback) => {
  const accessToken = localStorage.getItem("Token");

  // If there is no access token or it's expired, refresh immediately
  if (!accessToken || isTokenExpired(accessToken)) {
    refreshCallback(); // Trigger the refresh callback immediately
    return;
  }

  try {
    const decoded = jwtDecode(accessToken);
    const expirationTime = decoded.exp * 1000; // Convert to milliseconds
    const refreshTime = expirationTime - 5 * 60 * 1000; // 5 minutes before expiry

    // Calculate the delay in milliseconds
    const delay = Math.max(refreshTime - Date.now(), 0);

    // Set a timeout to refresh the token before it expires
    setTimeout(() => {
      refreshCallback(refreshToken); // Trigger the refresh callback at the calculated time
    }, delay);
  } catch (error) {
    console.error("Error decoding token:", error);
    refreshCallback(); // If decoding fails, refresh the token immediately
  }
};
