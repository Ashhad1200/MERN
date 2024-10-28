import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/contactUs/feedBack"; // Define your API endpoint

export const useSendFeedback = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error sending feedback");
            }

            return data; // Return the response data for onSuccess
        },
        onSuccess: (data) => {
            console.log(data.success); 
            queryClient.invalidateQueries({ queryKey: ["comments"] }); // Adjust as necessary
        },
        mutationKey: ["sendFeedback"], // Unique key for this mutation
    });
};
