import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./inputBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const URL =
    "https://media.istockphoto.com/id/481800358/photo/sunset-light-on-skyline-of-air-polluted-tehran.jpg?s=2048x2048&w=is&k=20&c=3O6CBsSd9fGUAiJ2iXFgy0WxRAaWrrPnEPu9ONNtNQQ=";

  const HOT =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg=";
  const COLD =
    "https://media.istockphoto.com/id/629628262/photo/pedestrians-and-traffic-on-a-winter-day.jpg?s=2048x2048&w=is&k=20&c=mA4ec_lGGailFdxOhGBSzVjI81JX5Z7iz-tCGcdSN4o=";
  const RAIN =
    "https://media.istockphoto.com/id/520773327/photo/caution-heavy-rain.jpg?s=2048x2048&w=is&k=20&c=SloIlg0jDiE8hmI_agNFXm9jDdw0bJPLOsJVCw9hdi4=";

  return (
    <div>
      <div className="cardcontainor">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN : info.temp > 15 ? HOT : COLD}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Tempreture = {info.temp}&deg;</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temp = {info.tempMin}&deg;</div>
              <div>Max Temp = {info.tempMax}&deg;</div>
              <div>
                The weather can be described as <i>{info.weather} </i>and feels
                like {info.feelslike}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
