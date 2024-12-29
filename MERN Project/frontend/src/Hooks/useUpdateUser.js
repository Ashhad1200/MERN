
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        
        mutationFn: async (updatedUser) => {
            const { id, ...data } = updatedUser;

            // Retrieve the token from local storage or any other secure place
            const token = localStorage.getItem('Token'); // Assuming the token is stored in localStorage

            // Set the authorization header if the token is available
            const config = token ? {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            } : {};

            try {
                // Send the PUT request with the authorization header
                const response = await axios.put(`http://localhost:8000/user/update/user/${id}`, data, config);
                return response.data;
            } catch (error) {
                // Handle errors appropriately
                throw new Error(error.response?.data?.message || 'Error updating user');
            }
        },

        onSuccess: () => {
            // Invalidate the "users" query to refresh the user data
            queryClient.invalidateQueries("users");
        },

    });
};
