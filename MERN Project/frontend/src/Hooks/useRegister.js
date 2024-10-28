import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/auth/registration"; // Define your API endpoint

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

            return data; // Return the response data for onSuccess
        },
        onSuccess: (data) => {
            // Assuming your API returns a success message
            console.log(data.success); // Log or handle success as needed
            queryClient.invalidateQueries({ queryKey: ["users"] }); // Adjust as necessary
        },
        mutationKey: ["register"], // Unique key for this mutation
    });
};
