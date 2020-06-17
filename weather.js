const COORDS = 'coords';

function saveCoords(coords) {
    localStorage.setItem(JSON.stringify(coords));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    };
    saveCoords(coords);
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
        getWeather();
    }
}

function init() {
    loadCoords();
}

init();