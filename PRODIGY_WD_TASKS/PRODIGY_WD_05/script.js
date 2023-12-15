function getweather(){
    const apikey='6e181b676505caaacd236055480e6a74';
    const city= document.getElementById('city').value;
    
    if(!city){
        alert('PLease enter a valid city name');
        return;
    }
    const currentweatherurl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';

    fetch(currentweatherurl)
        .then(response => response.json())
        .then(data => {
            displayweather(data);
        })
        .catch(error=>{
            console.error('Error fetching current weather data',error);
            alert('Error fetching current weather data.Please try again');
        });
    fetch(forecasturl)
        .then(response => response.json())
        .then(data =>{
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}
function displayweather(data){
    const tempdivinfo = document.getElementById('temp-div');
    const weatherinfodiv = document.getElementById('weather-info');
    const weathericon = document.getElementById('weather-icon');
    const hourlyforcastdiv = document.getElementById('hourly-forecast');

    weatherinfodiv.innerHTML='';
    hourlyforcastdiv.innerHTML='';
    tempdivinfo.innerHTML='';
}