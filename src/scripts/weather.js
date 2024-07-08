const searchBar = document.querySelector(".search_bar"),
weatherIcon = document.querySelector(".weather-icon"),
humidityTxt = document.querySelector(".humidity").children[1].children[0],
windSpeed = document.querySelector(".wind-speed").children[1].children[0],
temp = document.querySelector(".temp"),
city = document.querySelector(".city");

const firstToUpper = (str) => {
  str = str.split('');

  str.splice(0, 1, str[0].toUpperCase());

  return str.join('');
}

const options = {method: 'GET', headers: {accept: 'application/json'}};

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.longitude;
  let long = position.coords.latitude;

  fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${long}, ${lat}&apikey=hWQMlaU8KJmGFa68MS0tzp7xrbb58xX0`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response);

    switch(response.data.values.weatherCode) {
      case 1000: {
        weatherIcon.src = "../../images/weather-icons/clear_day.svg";

        break;
      }

      case 1100: {
        weatherIcon.src = "../../images/weather-icons/mostly_clear_day.svg";

        break;
      }

      case 1101: {
        weatherIcon.src = "../../images/weather-icons/partly_cloudy_day.svg";

        break;
      }

      case 1102: {
        weatherIcon.src = "../../images/weather-icons/moustly_cloudy.svg";

        break;
      }

      case 1001: {
        weatherIcon.src = "../../images/weather-icons/cloudy.svg";

        break;
      }

      case 2100: {
        weatherIcon.src = "../../images/weather-icons/fog_light.svg";

        break;
      }

      case 2000: {
        weatherIcon.src = "../../images/weather-icons/fog.svg";

        break;
      }

      case 4000: {
        weatherIcon.src = "../../images/weather-icons/drizzle.svg";

        break;
      }

      case 4200: {
        weatherIcon.src = "../../images/weather-icons/cloudy.svg";

        break;
      }

      case 4001: {
        weatherIcon.src = "../../images/weather-icons/rain.svg";

        break;
      }

      case 4201: {
        weatherIcon.src = "../../images/weather-icons/heavy_rain.svg";

        break;
      }

      case 5001: {
        weatherIcon.src = "../../images/weather-icons/flurries.svg";

        break;
      }

      case 5100: {
        weatherIcon.src = "../../images/weather-icons/snow_light.svg";

        break;
      }

      case 5000: {
        weatherIcon.src = "../../images/weather-icons/snow.svg";

        break;
      }

      case 5101: {
        weatherIcon.src = "../../images/weather-icons/snow_heavy.svg";

        break;
      }

      case 8000: {
        weatherIcon.src = "../../images/weather-icons/tstorm.svg";

        break;
      }
    }
  
    humidityTxt.innerHTML = response.data.values.humidity + "%";
    windSpeed.innerHTML = response.data.values.windSpeed + " mph";
    temp.innerHTML = Math.ceil(response.data.values.temperature) + "°";
  })
});


window.addEventListener("keydown", (e) => {
  if(e.key === "Enter" && searchBar.value != '') {
    fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${searchBar.value.toLowerCase().trim()}&apikey=hWQMlaU8KJmGFa68MS0tzp7xrbb58xX0`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)

      let cityName = searchBar.value.split(' ');

      for(let i = 0; i < cityName.length; i++) {
        cityName[i] = firstToUpper(cityName[i]);
      }
    
      city.innerHTML = cityName.join(' ');

      switch(response.data.values.weatherCode) {
        case 1000: {
          weatherIcon.src = "../../images/weather-icons/clear_day.svg";

          break;
        }

        case 1100: {
          weatherIcon.src = "../../images/weather-icons/mostly_clear_day.svg";

          break;
        }

        case 1101: {
          weatherIcon.src = "../../images/weather-icons/partly_cloudy_day.svg";

          break;
        }

        case 1102: {
          weatherIcon.src = "../../images/weather-icons/moustly_cloudy.svg";

          break;
        }

        case 1001: {
          weatherIcon.src = "../../images/weather-icons/cloudy.svg";

          break;
        }

        case 2100: {
          weatherIcon.src = "../../images/weather-icons/fog_light.svg";

          break;
        }

        case 2000: {
          weatherIcon.src = "../../images/weather-icons/fog.svg";

          break;
        }

        case 4000: {
          weatherIcon.src = "../../images/weather-icons/drizzle.svg";

          break;
        }

        case 4200: {
          weatherIcon.src = "../../images/weather-icons/cloudy.svg";

          break;
        }

        case 4001: {
          weatherIcon.src = "../../images/weather-icons/rain.svg";

          break;
        }

        case 4201: {
          weatherIcon.src = "../../images/weather-icons/heavy_rain.svg";

          break;
        }

        case 5001: {
          weatherIcon.src = "../../images/weather-icons/flurries.svg";

          break;
        }

        case 5100: {
          weatherIcon.src = "../../images/weather-icons/snow_light.svg";

          break;
        }

        case 5000: {
          weatherIcon.src = "../../images/weather-icons/snow.svg";

          break;
        }

        case 5101: {
          weatherIcon.src = "../../images/weather-icons/snow_heavy.svg";

          break;
        }

        case 8000: {
          weatherIcon.src = "../../images/weather-icons/tstorm.svg";

          break;
        }
      }
    
      humidityTxt.innerHTML = response.data.values.humidity + "%";
      windSpeed.innerHTML = response.data.values.windSpeed + " mph";
      temp.innerHTML = Math.ceil(response.data.values.temperature) + "°";
    })
    .catch(err => console.error(err));
  }
})