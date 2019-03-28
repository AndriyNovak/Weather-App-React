// import * as React from 'react';
// import {WeatherShow} from "./WeatherShow.jsx";


// const API = "f961192c9968a368935d2bd839a82ff7";

// export class Form extends React.Component {
//     constructor(props,state){
//         super(props,state);
//         this.state = {
                    
//                     city: undefined,
//                     temperature: undefined,
//                     pressure: undefined,
//                     humidity: undefined,
//                     description: undefined,
//                     wind: undefined,                
//                     error: undefined
        
//                 }
//     }
//     async request(event)  {
//         const CITY_NAME = event.target.value;        
//         console.log(CITY_NAME);
//         if (CITY_NAME){
//             const WeatherRequest = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API}&units=metric`);
//             const data = await WeatherRequest.json();
//             console.log(data);
//             console.log("Місто: " + data.name);
//             console.log("Температура: " + data.main.temp.toFixed() + " град.");
//             console.log("Тиск: " + (data.main.pressure/1.333).toFixed() + " мм.рт.ст.");
//             console.log("Вологість: " + data.main.humidity + " %");            
//             console.log("Опади: " + data.weather[0].description);
//             console.log("Швидкість вітру: " + (data.wind.speed*3.6).toFixed() + " км/год");
//             // if (data){
//             //      this.setStateValue();
//             // }else {console.log("Не працює запрос, ошибка data")}
//             this.setState = ({
//                 city: "Місто: " + data.name,
//                 temperature: "Температура: " + data.main.temp.toFixed() + " град.",
//                 pressure: "Тиск: " + (data.main.pressure/1.333).toFixed() + " мм.рт.ст.",
//                 humidity: "Вологість: " + data.main.humidity + " %",
//                 description: "Опади: " + data.weather[0].description,
//                 wind: "Швидкість вітру: " + (data.wind.speed*3.6).toFixed() + " км/год",                
//                 error: undefined
//             });
                  
//         }else {          
//             this.setState = ({
//                 city: undefined,
//                 temperature: undefined,
//                 pressure: undefined,
//                 humidity: undefined,
//                 description: undefined,
//                 wind: undefined,                
//                 error: "Помилка. Ви не правильно ввели місто."
//                 });
//         }
//     }       
        
//     // setStateValue(){
//     //     this.setState({
//     //         city: "Місто: " + data.name,
//     //         temperature: "Температура: " + data.main.temp.toFixed() + " град.",
//     //         pressure: "Тиск: " + (data.main.pressure/1.333).toFixed() + " мм.рт.ст.",
//     //         humidity: "Вологість: " + data.main.humidity + " %",
//     //         description: "Опади: " + data.weather[0].description,
//     //         wind: "Швидкість вітру: " + (data.wind.speed*3.6).toFixed() + " км/год",                
//     //         error: undefined
//     //     });
      
//     // }
//     getMethod(event){
//         this.setState = {
//             method: this.request(event)
//         }
//     }
//     hendlerOnClick(event){
//         event.preventDefault();
//         console.log("Кнопка працює");
        
           
        
//     }
//     render() {
//         return (
//                 <div>
//                     {this.props.name}
//                     <form className="container" >
//                         <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Введіть дані в указані поля</label>
//                         <input type="text"  onChange = {()=>this.getMethod(event)} name="city" className="form-control" id="exampleInputEmail1" placeholder="Введіть місто"></input>
                        
//                         </div>
                
//                         <button  className="btn btn-success" onClick={()=>this.hendlerOnClick(event)}>Показать погоду </button>
//                     </form>
//                     <WeatherShow 
//                         city = { this.state.city }
//                         temperature = { this.state.temperature }
//                         pressure = { this.state.pressure }
//                         humidity = { this.state.humidity }
//                         description = { this.state.description }
//                         wind = { this.state.wind }                
//                         // error = { this.state.error }
//                     />
//                 </div> 
                
//         );
           
//     }
    
// }


