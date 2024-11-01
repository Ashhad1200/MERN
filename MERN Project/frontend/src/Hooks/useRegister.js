import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/auth/registration";

export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (user) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        mutationKey: ["register"],
    });
};
