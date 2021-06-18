import '../assets/css/App.css';
import 'weather-icons/css/weather-icons.css'


function CurrentWeatherCard(props){
    return(
        <div className="currentWeatherCard">
            <div className="currentWeather-img">
              <i className={`wi wi-owm-${props.id} icon`}></i>
              <p>{props.description}</p>
            </div>
            <div className="currentWeather-location">{props.city}</div>
            <div className="currentWeather-temperature">{props.temp} <p>F</p></div>
          </div>

    )
}

export default CurrentWeatherCard;