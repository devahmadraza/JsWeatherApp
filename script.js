
const url = 'https://weather-data-api1.p.rapidapi.com/find-location?q=manila&limit=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'acb9e7994amshbaf15125e782e38p1a842djsn4d3708fdaf6c',
		'x-rapidapi-host': 'weather-data-api1.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

async function getWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // JSON response
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getWeather();