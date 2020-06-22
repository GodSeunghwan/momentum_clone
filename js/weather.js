const weather = document.querySelector(".js-weather");

const API_KEY = '2e1b6dd61601283b14b84b32419b87bc';
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        }).then((json) => {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}° @${place}`;
        });
}

function saveCoords(coords) {
    localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    };
    saveCoords(coords);
    getWeather(latitude, longitude);
}

function handleGeoError(error) {
    alert("위치정보 사용 권한을 승인해주세요.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();