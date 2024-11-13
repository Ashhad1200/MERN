import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const urlUsers = "http://localhost:8000/user/users";

export const useListUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = localStorage.getItem("Token");

      // Set up axios with the authorization header
      const response = await axios.get(urlUsers, {
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
export const useUser = (_id) => {
  const query = useQuery({
    queryKey: ["user", !!_id],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = localStorage.getItem("Token");

      // Use axios to make the request, including the Authorization header
      const response = await axios.get(
        `http://localhost:8000/user/users/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        }
      );

      return response.data; // Axios automatically parses JSON responses
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return query;
};
