async function getProjects() {
    // Get url from the env file
    const url = `${import.meta.env.VITE_API_URL}/projects`;

    // Call the fetch function and pass in the url and GET method
    const response = await fetch(url, { method: 'GET' });

    // If the response is not successful, create a custom fallback error and write a function to catch it
    if (!response.ok) {
        const fallbackError = 'Error fetching projects';

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default getProjects;
