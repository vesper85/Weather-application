import './assets/css/App.css';
import bg_image from './assets/images/cloudy.jpg';
import 'weather-icons/css/weather-icons.css'
import WeatherCard from './Components/WeatherCard';
import React from "react";
import CurrentWeatherCard from './Components/Current-Weather-card';


const API_Key = "550359661165012b1def6aa7449f09ee";
const weatherBitApiKey = '60938d02caec48f69017ddc15bce6faa';

// const lowerPart = document.querySelector('.lower-part');


class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      id:undefined,
      temp:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:undefined,
      s_des:undefined,
      daily:undefined,
    };
    this.getWeather();
  }

  getWeather = async ()=>{
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_Key}`);
    //api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
    // console.log(api_call);
    const response = await api_call.json();
    // console.log(response);
    const api_call_daily = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Mumbai&days=7&key=${weatherBitApiKey}`);
    const responseTest =await api_call_daily.json();
    console.log(responseTest.data);
    this.setState({
      country:response.sys.country,
      city:response.name,
      description:response.weather[0].description,
      temp:this.kelvinToFar(response.main.temp),
      icon:this.weatherIcon(response.weather[0].id),
      id:response.weather[0].id,
      daily:responseTest.data,
    })
  }

  weatherCardDisplay(dailyData){
   dailyData.forEach(el => {
    //  lowerPart.app
     
   });
  }

  kelvinToFar = (kel)=>{
    let far = Math.floor((kel*1.8)-459.67);
    return far;
  }


  weatherIcon(code){
    switch(code){
      case code>=200 && code<=232:
        return 'thunderstorm';
      case code>=300 && code<=321:
        return 'drizzle'
      case code>=500 && code<=531:
        return 'Rain'
      case code>=600 && code<=622:
        return 'Snow'
      case code>700 && code <= 781:
        return 'Atmosphere'
      case code>800 && code<=804:
        return 'clouds'

      default:
        return 'clear'
    }
  }




  render() {
    return(
    <div
      className="container"
      style={{
        backgroundImage: 'url(' + bg_image + ')',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div className="search-bar"></div>
      <div className="upper-part">

        <div className="left">
          
          <CurrentWeatherCard 
          country={ this.state.country} 
          city={this.state.city} 
          description={ this.state.description} 
          temp={this.state.temp} 
          icon={this.state.icon} 
          id={this.state.id} />
            
        </div>
        <div className="right">
          <div className="otherDetails"></div>
        </div>

      </div>
      <div className="lower-part">
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
      </div>
    </div>);
  }

}
export default App;


// function App() {
//   return (
//     // <h1>it is a test! its not working and totally not working lets see if it still works</h1>
//     <div
//       className="container"
//       style={{
//         backgroundImage: 'url(' + bg_image + ')',
//         backgroundSize: 'cover',
//         height: '100vh',
//       }}
//     >
//       <div className="search-bar"></div>
//       <div className="upper-part">

//         <div className="left">
//           <div className="currentWeatherCard">
//             <div className="currentWeather-img">
//               <i class="wi wi-cloud icon"></i>
//               <p>overcast</p>
//             </div>
//             <div className="currentWeather-location">old saybrook, CT</div>
//             <div className="currentWeather-temperature">65 <p>F</p></div>
//           </div>
//         </div>
//         <div className="right">
//           <div className="otherDetails"></div>
//         </div>

//       </div>
//       <div className="lower-part">
//         <WeatherCard/>
//         <WeatherCard/>
//         <WeatherCard/>
//         <WeatherCard/>
//         <WeatherCard/>
//         <WeatherCard/>
//         <WeatherCard/>
//       </div>
//     </div>
//   );
// }

// export default App;



// current weather card
/* <div className="currentWeatherCard">
              <div className="currentWeather-img">
                <i className="wi wi-cloud icon"></i>
                <p>overcast</p>
              </div>
              <div className="currentWeather-location">old saybrook, CT</div>
              <div className="currentWeather-temperature">65 <p>F</p></div>
            </div> */