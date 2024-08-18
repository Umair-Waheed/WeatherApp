import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info} ){

    const HOT_URL="https://images.unsplash.com/photo-1518114635666-fd9f62060bf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
  <div className="InfoBox">
    <div className="cardContainer">
      <Card className='card-container' sx={{ maxWidth: 345 }}>
        <CardMedia className='card-media'
          sx={{ height: 160 }}
          image={info.humidity > 80
           ? RAINY_URL: 
            info.temp > 15 ? HOT_URL
            :COLD_URL
         }
      />
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h4" component="div">
          {info.city}{info.humidity > 80
          ?<ThunderstormIcon/>: 
          info.temp > 15 ? <WbSunnyIcon/>
          :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min-Temp = {info.tempMin}&deg;C</p>
          <p>Max-Temp = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike} {}&deg;C</b></p>
        


          
        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
    )
}