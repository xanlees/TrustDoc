import axios from 'axios';
import { getToken } from './auth';

function getCsrfToken() {
    const name = 'csrftoken';
    let cookieValue = null;
    // Check if code is running in browser environment
    if (typeof document !== 'undefined' && document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRFToken': getCsrfToken()
    },
    withCredentials: true,
});

api.interceptors.request.use(config => {
    // Don't modify Content-Type if it's multipart/form-data
    if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
});

api.interceptors.request.use(
    (config) => {
        // 1. Add Authorization header for protected routes (excluding login/refresh)
        if (!config.url?.includes('/auth/token/refresh')) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        // 2. Add CSRF token header for 'unsafe' methods
        const method = config.method?.toUpperCase();
        if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
            const csrfToken = getCsrfToken(); // Default Django CSRF cookie name
            if (csrfToken) {
                config.headers['X-CSRFToken'] = csrfToken;
            } else {
                // Optional: Log a warning if the cookie isn't found.
                // This might happen if the initial page load didn't set the cookie correctly.
                console.warn('CSRF token cookie "csrftoken" not found.');
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add request interceptor to update CSRF token before each request
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             console.log("Attempting token refresh...");
//             try {
//                 const newToken = await refreshToken();
//                 if (newToken) {
//                     originalRequest.headers.Authorization = `Bearer ${newToken}`;
//                     return api(originalRequest);
//                 } else {
//                     clearTokens();
//                     if (!window.location.pathname.startsWith('/login')) {
//                         window.location.href = '/login';
//                     }
//                     return Promise.reject(new Error("Token refresh failed. Redirecting to login."));
//                 }

//             } catch (refreshError) {
//                 console.error("Error refreshing token:", refreshError);
//                 clearTokens();
//                 if (!window.location.pathname.startsWith('/login')) {
//                     window.location.href = '/login';
//                 }
//                 return Promise.reject(refreshError);
//             }
//         }

//         if (error.response?.status === 403 && error.response?.data?.detail?.includes('CSRF')) {
//             console.error("CSRF Verification Failed. Check cookie/header setup.", error.response.data);
//             // Potentially alert the user or try to recover if applicable,
//             // but usually indicates a setup issue.
//         }

//         return Promise.reject(error);
//     }
// );

export const login = async (username: string, password: string) => {
    try {
        const response = await api.post('/auth/login', {
            username: username,
            password: password
        });

        // Make sure the response contains both access and refresh tokens
        if (response.data && response.data.access && response.data.refresh) {
            return response;
        } else {
            throw new Error('Invalid token format received from server');
        }
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
