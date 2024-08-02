// utils/auth.js
export const isAuthenticated = async () => {
    try {
        const response = await fetch('/api/check-auth', {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        });
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
        return false;
    }
};