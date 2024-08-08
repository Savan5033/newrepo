import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "73387ab956244214ad9e7b17eff7d46f";

let getWetherInfop = async ()=>{
    try{
    let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await response.json();
    console.log(jsonResponse)
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

    }
    console.log(result);
    return result;
}
catch(err){
 throw err;
}
};


  let handleChange = (evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit = async (evt)=>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWetherInfop();
    updateInfo(newInfo);
  
} catch(err){
  setError(true);
}
};

  return (
    <div>

      <form className="SearchBox" onSubmit={handleSubmit}>
        <TextField
          id="city"
          value={city}
          label="City Name"
          variant="outlined"
          required
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
