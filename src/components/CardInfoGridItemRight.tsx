import { Grid, Typography } from '@mui/material';
import { WeatherForecastInfoDaily, WeatherForecastInfoHours } from '../types/WeatherForecastTypes';

type Props = {
  daily: boolean;
  weatherInfo: WeatherForecastInfoDaily | WeatherForecastInfoHours;
};

export default function CardInfoGridItemRight(props: Props) {
  const { daily, weatherInfo } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      {daily ? (
        <>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Hours of sun:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).HoursOfSun}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Wind:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.Wind.Speed.Value}{' '}
              {(weatherInfo as WeatherForecastInfoDaily).Day.Wind.Speed.Unit}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Cloud cover:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.CloudCover}%
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Precipitation:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.HoursOfPrecipitation} hours
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Rain:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.HoursOfRain} hours
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Precipitation probability:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.PrecipitationProbability}%
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Thunderstorm probability:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.ThunderstormProbability}%
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Rain probability:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.RainProbability}%
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Snow probability:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.SnowProbability}%
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Ice probability:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Day.IceProbability}%
            </Typography>
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            {(weatherInfo as WeatherForecastInfoHours).HasPrecipitation ? 'Precipitation' : 'No precipitation'}
          </Typography>
          <Typography sx={{ color: 'white' }}>
            <Typography variant="body1" component="span" sx={{ color: 'aquamarine' }}>
              {(weatherInfo as WeatherForecastInfoHours).PrecipitationProbability}%
            </Typography>{' '}
            chance of precipitation
          </Typography>
        </>
      )}
    </Grid>
  );
}
