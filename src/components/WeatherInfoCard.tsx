import { Avatar, Card, CardHeader, Collapse, Divider, Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import CardInfoGridItemLeft from './CardInfoGridItemLeft';
import CardInfoGridItemRight from './CardInfoGridItemRight';
import { WeatherForecastInfoDaily, WeatherForecastInfoHours } from '../types/WeatherForecastTypes';

type Props = {
  weatherInfo: WeatherForecastInfoDaily | WeatherForecastInfoHours;
  daily: boolean;
};

export default function WeatherInfoCard(props: Props) {
  const { daily } = props;
  const { weatherInfo } = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        sx={{ backgroundColor: grey[700] }}
        avatar={
          <Avatar
            src={
              daily
                ? `/${(weatherInfo as WeatherForecastInfoDaily).Day.Icon}-s.png`
                : `/${(weatherInfo as WeatherForecastInfoHours).WeatherIcon}-s.png`
            }
          />
        }
        title={
          <Typography variant="h6" sx={{ color: 'aquamarine' }}>
            {daily
              ? (weatherInfo as WeatherForecastInfoDaily).Day.ShortPhrase
              : (weatherInfo as WeatherForecastInfoHours).IconPhrase}{' '}
          </Typography>
        }
        subheader={
          <Typography sx={{ color: 'white' }} variant="body2">
            {daily
              ? new Date((weatherInfo as WeatherForecastInfoDaily).Date).toISOString().replace('T', ' ').split('.')[0]
              : new Date((weatherInfo as WeatherForecastInfoHours).DateTime)
                  .toISOString()
                  .replace('T', ' ')
                  .split('.')[0]}
          </Typography>
        }
        action={
          <IconButton
            onClick={handleExpanded}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ '&:focus': { outline: 'none' } }}
          >
            <Typography variant="h4" component="span" sx={{ color: 'white' }}>
              ▼
            </Typography>
          </IconButton>
        }
      />
      {expanded && <Divider sx={{ backgroundColor: 'aquamarine' }} />}
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ backgroundColor: grey[700], padding: 2 }}>
        <Grid container>
          <CardInfoGridItemLeft daily={daily} weatherInfo={weatherInfo} />
          <CardInfoGridItemRight daily={daily} weatherInfo={weatherInfo} />
        </Grid>
      </Collapse>
    </Card>
  );
}
