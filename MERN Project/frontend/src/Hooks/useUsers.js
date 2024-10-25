import { useQuery } from "@tanstack/react-query";

const urlUsers = "http://localhost:8000/auth/users";

export const useListUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(urlUsers);
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

export const useUser = (_id) => {
  const query = useQuery({
    queryKey: ["user" ,_id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/auth/users/${_id}`);
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
