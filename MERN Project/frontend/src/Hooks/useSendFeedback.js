import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/contactUs/feedBack";

export const useSendFeedback = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData) => {
            // Retrieve the JWT token from localStorage (or wherever it's stored)
            const token = localStorage.getItem("Token");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Attach the JWT token here
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Throw error with server-provided message or default to "Error sending feedback"
                throw new Error(data.error || "Error sending feedback");
            }

            return data;
        },
        onSuccess: (data) => {
            // Invalidate the comments cache to refresh data after feedback is sent
            queryClient.invalidateQueries({ queryKey: ["comments"] });
        },
        mutationKey: ["sendFeedback"],
    });
};
