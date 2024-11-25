
export const RefreshToken = async (refreshToken) => {

  // const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      console.warn("No refresh token found, logging out.");
      // Optionally show a toast or modal here before logging out
      return null;
    }
  
    try {
      const response = await fetch("http://localhost:8000/refresh/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }
  
      const { token } = await response.json();
      localStorage.setItem("Token", token);
      console.log("refreshed token 2")
      return token;
    } catch (error) {
      console.error("Token refresh failed:", error);
      
      // Optionally show an alert or toast about the failure
      alert("Your session has expired. Please log in again.");
  
      // Clear tokens from localStorage and redirect to login
      localStorage.removeItem("Token");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login"; // Redirect to login
    }
  };
  