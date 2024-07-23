const url = 'https://airplanesdb.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': (import.meta.env.VITE_RAPIDAPI_HOST),
        'x-rapidapi-key': (import.meta.env.VITE_RAPIDAPI_KEY),
    }
};

export const fetchData = async (id='') => {
    try {
        const response = await fetch(`${url}?id=${id}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

