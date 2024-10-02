const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Lhokseumawe&appid=570bbf530cddfc8ce95a236bce00f973&units=metric';
function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;            
            document.getElementById('temperature').textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
setInterval(fetchWeatherData, 5000);
fetchWeatherData();