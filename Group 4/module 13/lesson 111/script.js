function ApiRequest() {
    return new Promise((resolve, reject) => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((data) => {
            data.json()
                .then((data) => {
                    resolve(data)
                })
        })
        .catch(() => {
            console.log('Fetching Error')
        });

    });
}

const displayWeather = (data) => {
    console.log(data)

    // const weatherDiv = document.getElementById('weather-div');
    // const city = data.city_name;
    // const country = data.country_code;
    // const weatherData = data.data;
    
    // weatherDiv.innerHTML = '';

    // const location = document.getElementById('heading');
    // location.textContent = `Weather in ${city}, ${country}`;
    
    // weatherData.forEach((day) => {
    //     const dayContainer = document.createElement('div');
    //     dayContainer.classList.add('weather-day');
        
    //     const dateElement = document.createElement('h3');
    //     dateElement.textContent = day.valid_date;
    //     dayContainer.appendChild(dateElement);
        
    //     const descriptionElement = document.createElement('p');
    //     descriptionElement.textContent = day.weather.description;
    //     dayContainer.appendChild(descriptionElement);

    //     const iconElement = document.createElement('img');
    //     iconElement.src = `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`;
    //     dayContainer.appendChild(iconElement);

    //     const tempElement = document.createElement('p');
    //     tempElement.textContent = `${day.temp}°C`;
    //     dayContainer.appendChild(tempElement);

    //     const maxTempElement = document.createElement('p');
    //     maxTempElement.textContent = `Max Temp: ${day.max_temp}°C`;

    //     const minTempElement = document.createElement('p');
    //     minTempElement.textContent = `Min Temp: ${day.min_temp}°C`;

    //     dayContainer.appendChild(maxTempElement);
    //     dayContainer.appendChild(minTempElement);

    //     const windElement = document.createElement('p');
    //     windElement.textContent = `Wind: ${day.wind_spd} m/s, ${day.wind_cdir_full}`;
    //     dayContainer.appendChild(windElement);

    //     weatherDiv.appendChild(dayContainer);
    // });
}

ApiRequest()
    .then(displayWeather)
    .catch(() => {
        console.log('Fetching error')
    });

async function catFacts() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log('Error')
    } finally {
        console.log('All done')
    }
    
}

catFacts()
