import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css';

export default function InfoBox({ newInfo }) {
    const INIT_URL = "https://images.unsplash.com/photo-1733164845653-1816b38b9c0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={newInfo.humidity > 80 ? RAIN_URL : newInfo.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {newInfo.city}
                            {newInfo.humidity > 80 ? <ThunderstormIcon /> : newInfo.temp > 15 ? <SunnyIcon /> : <SevereColdIcon />}
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p>Temperature = {newInfo.temp}&deg;C</p>
                            <p>Humidity = {newInfo.humidity}</p>
                            <p>Min Temp = {newInfo.tempMin}&deg;</p>
                            <p>Max Temp = {newInfo.tempMax}&deg;</p>
                            <p>The weather can be described as <i>{newInfo.weather}</i> and feels like = {newInfo.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
