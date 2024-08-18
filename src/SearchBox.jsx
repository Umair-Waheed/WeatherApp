import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL=import.meta.env.VITE_API_URL;
    const API_KEY=import.meta.env.VITE_API_KEY;
    let weatherInfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMax:jsonResponse.main.temp_max,
                tempMin:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
       
    }
    

    let handleChange=(event)=>{
        setCity(event.target.value);
        setError(false);
        
    }
    let handleSubmit=async(event)=>{
      
        try{
            event.preventDefault();
            console.log(city);
    
            setCity("");
            let newInfo=await weatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
            
        }
     
       


    }
         
    return (
        <div className='SearchBox '>
            <form onSubmit={handleSubmit}>  
            <input type='search' placeholder='Search City*' value={city}  onChange={handleChange} /><br />
            <button  type='submit' >Search</button>
            {error && <p className="error-text">No such place exists!</p>}
            </form>
        </div>
    );
}