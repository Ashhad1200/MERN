import { useQuery } from "@tanstack/react-query";

const urlComments = "http://localhost:8000/contactUs/allComments";

export const useListComments = () => {
  const query = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      // Retrieve the JWT token from localStorage (or wherever it's stored)
      const token = localStorage.getItem("Token");

      const response = await fetch(urlComments, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // Attach the JWT token here
        },
      });

      if (!response.ok) {
        const errorMessage = `Error fetching comments: ${response.status} - ${response.statusText}`;
        throw new Error(errorMessage);
      }

      return response.json();
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    onError: (error) => {
      console.error("Error fetching comments:", error);
    },
  });

  return query;
};
