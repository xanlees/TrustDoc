export const saveToken = (accessToken: string, refreshToken: string) => {
    if (!accessToken || !refreshToken) {
        throw new Error('Invalid tokens received');
    }
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refresh", refreshToken);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const refreshToken = async () => {
    const refresh = localStorage.getItem("refresh");
    if (!refresh) {
        return null;
    }

    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/token/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refresh }),
        });

        if (!response.ok) {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            return null;
        }

        const data = await response.json();
        if (data.access) {
            saveToken(data.access, refresh);
            return data.access;
        }
        return null;
    } catch (error) {
        console.error("Error refreshing token:", error);
        return null;
    }
};

export const clearTokens = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
};
