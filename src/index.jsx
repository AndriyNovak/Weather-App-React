
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {WeatherShow} from "./components/WeatherShow.jsx";
import "./components/styleWeather.scss";

const API = "f961192c9968a368935d2bd839a82ff7";

 class App extends React.Component {
    constructor(props,state){
        super(props,state);
        this.state = {
                    
                    city: undefined,
                    temperature: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    description: undefined,
                    wind: undefined, 
                    icon:undefined,               
                    error: undefined,
                    bool:false
                }
    }
    async request(event)  {
        const CITY_NAME = event.target.value;        
        console.log(CITY_NAME);
        if (CITY_NAME){
            const WeatherRequest = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API}&units=metric`);
            const data = await WeatherRequest.json();
            console.log(data);
            console.log("Місто: " + data.name);
            console.log("Температура: " + data.main.temp.toFixed() + " град.");
            console.log("Тиск: " + (data.main.pressure/1.333).toFixed() + " мм.рт.ст.");
            console.log("Вологість: " + data.main.humidity + " %");            
            console.log("Опади: " + data.weather[0].description);
            console.log("Швидкість вітру: " + (data.wind.speed*3.6).toFixed() + " км/год");
            console.log("URL картинки: " + data.weather[0].icon);

            this.setState({
                city: "Місто: " + data.name + ", " + data.sys.country,
                temperature: "Температура: " + data.main.temp.toFixed() + " град.",
                pressure: "Тиск: " + (data.main.pressure/1.333).toFixed() + " мм.рт.ст.",
                humidity: "Вологість: " + data.main.humidity + " %",
                description: data.weather[0].description,
                wind: "Швидкість вітру: " + (data.wind.speed*3.6).toFixed() + " км/год",                
                icon:data.weather[0].icon,                
                error: undefined
            });
                  
        }else {          
            this.setState ({
                city: undefined,
                temperature: undefined,
                pressure: undefined,
                humidity: undefined,
                description: undefined,
                wind: undefined, 
                icon:undefined,               
                error: <div className="container">Помилка. Ви не правильно ввели місто.</div>
                });
        }
    }       
        
   
    getMethod(event){
        this.request(event)
    }
    
    hendlerOnClick(event){
        event.preventDefault();
        this.setState({
            bool:true
        })
        
    }


    render() {
        return (
                <div className="container wrap">
                    <div>
                        <img src="./img/" alt=""/>
                    </div>
                    <form className="container" >
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><h2>Weather App</h2></label>
                        <input type="text"  onChange = {()=>this.getMethod(event)} name="city" className="form-control" id="exampleInputEmail1" placeholder="Введіть місто"></input>
                        
                        </div>
                
                        <button  className="btn btn-success" onClick={()=>this.hendlerOnClick(event)}>Показать погоду </button>
                    </form>
                    {
                    this.state.bool ? 
                    <WeatherShow 
                        icon = {this.state.icon}
                        city = { this.state.city }
                        temperature = { this.state.temperature }
                        pressure = { this.state.pressure }
                        humidity = { this.state.humidity }
                        description = { this.state.description }
                        wind = { this.state.wind }                
                        error = { this.state.error }
                    />
                    :null
                    }
                    

                    
                </div> 
                
        );
           
    }
    
}

ReactDOM.render(<App/>, document.getElementById('root'));