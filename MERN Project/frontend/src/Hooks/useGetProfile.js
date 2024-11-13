import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const urlProfile = "http://localhost:8000/user/profile";

export const useProfile = () => {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = localStorage.getItem("Token");

      // Set up axios with the authorization header
      const response = await axios.get(urlProfile, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      });

      return response.data; // Axios automatically parses JSON responses
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return query;
};