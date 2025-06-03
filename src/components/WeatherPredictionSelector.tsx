import { Box, Tabs, Tab, CircularProgress } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import WeatherTabPanel from './WeatherTabPanel';
import useLocationWeather from '../hooks/useLocationWeather';
import WeatherInfoCard from './WeatherInfoCard';
import { WeatherForecastInfoDaily, WeatherForecastInfoHours } from '../types/WeatherForecastTypes';
import { useColors } from '../context/theme.context';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function WeatherPredictionSelector(props: { pickedLocation: number }) {
  const [value, setValue] = useState(0);
  const { weatherInfo, loading, success } = useLocationWeather(value, props.pickedLocation || 0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { primaryColor, textColor } = useColors();

  return (
    <div className="WeatherPredictionSelector">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: textColor }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: primaryColor },
              '& .Mui-selected': { color: `${primaryColor} !important` },
              '& .MuiTab-root': { color: textColor, outline: 'none' },
              margin: 'auto',
              width: 'fit-content',
            }}
          >
            <Tab label="1 Hour" {...a11yProps(0)} />
            <Tab label="12 Hours" {...a11yProps(1)} />
            <Tab label="24 Hours" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <WeatherTabPanel value={value} index={0}>
          {loading && <CircularProgress />}
          {!success && <>Error fetching data</>}
          {weatherInfo &&
            !loading &&
            success &&
            weatherInfo.map((info) => (
              <WeatherInfoCard
                key={`${(info as WeatherForecastInfoHours).EpochDateTime}-${
                  (info as WeatherForecastInfoHours).EpochDateTime
                }`}
                weatherInfo={info as WeatherForecastInfoHours}
                daily={false}
              />
            ))}
        </WeatherTabPanel>
        <WeatherTabPanel value={value} index={1}>
          {loading && <CircularProgress />}
          {!success && <>Error fetching data</>}
          {weatherInfo &&
            !loading &&
            success &&
            weatherInfo.map((info) => (
              <WeatherInfoCard
                key={`${(info as WeatherForecastInfoHours).EpochDateTime}-${
                  (info as WeatherForecastInfoHours).EpochDateTime
                }`}
                weatherInfo={info as WeatherForecastInfoHours}
                daily={false}
              />
            ))}
        </WeatherTabPanel>
        <WeatherTabPanel value={value} index={2}>
          {loading && <CircularProgress />}
          {!success && <>Error fetching data</>}
          {weatherInfo &&
            !loading &&
            success &&
            weatherInfo.map((info) => (
              <WeatherInfoCard
                key={`${(info as WeatherForecastInfoDaily).EpochDate}-${(info as WeatherForecastInfoDaily).EpochDate}`}
                weatherInfo={info as WeatherForecastInfoDaily}
                daily
              />
            ))}
        </WeatherTabPanel>
      </Box>
    </div>
  );
}
