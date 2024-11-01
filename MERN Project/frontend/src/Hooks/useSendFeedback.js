import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/contactUs/feedBack";

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

            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["comments"] });
        },
        mutationKey: ["sendFeedback"],
    });
};
