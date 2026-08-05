const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

async function getWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);

    }
}
// END
getWeather();