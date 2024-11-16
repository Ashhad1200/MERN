import { useMutation, useQueryClient } from '@tanstack/react-query';

const url = "http://localhost:8000/services/addServices";

export const useAddServices = () => {

    const queryClient = useQueryClient();
    const token = localStorage.getItem("Token");

    return useMutation({
        mutationFn: async (serviceData) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(serviceData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["services"] });
        },
        mutationKey: ["AddService"],
    });
};
