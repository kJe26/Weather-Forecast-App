import { Grid, Typography } from '@mui/material';
import { WeatherForecastInfoDaily, WeatherForecastInfoHours } from '../types/WeatherForecastTypes';

type Props = {
  daily: boolean;
  weatherInfo: WeatherForecastInfoDaily | WeatherForecastInfoHours;
};

export default function CardInfoGridItemLeft(props: Props) {
  const { daily, weatherInfo } = props;

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      {daily ? (
        <>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Sunrise:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {
                new Date((weatherInfo as WeatherForecastInfoDaily).Sun.Rise)
                  .toISOString()
                  .replace('T', ' ')
                  .split('.')[0]
              }
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Sunset:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {
                new Date((weatherInfo as WeatherForecastInfoDaily).Sun.Set)
                  .toISOString()
                  .replace('T', ' ')
                  .split('.')[0]
              }
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Moonrise:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {
                new Date((weatherInfo as WeatherForecastInfoDaily).Moon.Rise)
                  .toISOString()
                  .replace('T', ' ')
                  .split('.')[0]
              }
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Moonset:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {
                new Date((weatherInfo as WeatherForecastInfoDaily).Moon.Set)
                  .toISOString()
                  .replace('T', ' ')
                  .split('.')[0]
              }
            </Typography>
          </Typography>
          <Typography variant="h6" sx={{ color: 'aquamarine', marginBottom: 2 }}>
            Temperature
          </Typography>
          <Typography component="span" variant="body1" sx={{ color: 'white' }}>
            Minimums:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Temperature.Minimum.Value}°
              {(weatherInfo as WeatherForecastInfoDaily).Temperature.Minimum.Unit}
            </Typography>
          </Typography>
          <br />
          <Typography component="span" variant="body1" sx={{ color: 'white' }}>
            Maximums:{' '}
            <Typography sx={{ color: 'aquamarine' }} variant="body1" component="span">
              {(weatherInfo as WeatherForecastInfoDaily).Temperature.Maximum.Value}°
              {(weatherInfo as WeatherForecastInfoDaily).Temperature.Maximum.Unit}
            </Typography>
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ color: 'white', marginBottom: 2 }}>
            Temperature:{' '}
            <Typography component="span" variant="body1" sx={{ color: 'aquamarine' }}>
              {(weatherInfo as WeatherForecastInfoHours).Temperature.Value}°
              {(weatherInfo as WeatherForecastInfoHours).Temperature.Unit}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'white' }}>
            {(weatherInfo as WeatherForecastInfoHours).IsDaylight ? 'Day' : 'Night'}
          </Typography>
        </>
      )}
    </Grid>
  );
}
