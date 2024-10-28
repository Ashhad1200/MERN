import { useQuery } from "@tanstack/react-query";

const urlComments = "http://localhost:8000/contactUs/allComments";

export const useListComments = () => {
  const query = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await fetch(urlComments);
      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.statusText}`);
      }
      return response.json();
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return query;
};