import { useEffect, useState } from 'react';
import { WeatherForecastInfoHours, WeatherForecastInfoDaily } from '../types/WeatherForecastTypes';

export default function useLocationWeather(
  value: number,
  locationKey: number,
): { weatherInfo: WeatherForecastInfoDaily[] | WeatherForecastInfoHours[]; loading: boolean; success: boolean } {
  const forecastType: { [key: number]: string } = {
    0: `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${
      import.meta.env.VITE_ACCUWEATHER_API_KEY
    }&details=true&metric=true`,
    1: `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${
      import.meta.env.VITE_ACCUWEATHER_API_KEY
    }&details=true&metric=true`,
    2: `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${
      import.meta.env.VITE_ACCUWEATHER_API_KEY
    }&details=true&metric=true`,
  };

  const [weatherInfo1Day, setWeatherInfo1Day] = useState<WeatherForecastInfoDaily[]>([]);
  const [weatherInfoHour, setWeatherInfoHour] = useState<WeatherForecastInfoHours[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    setLoading(true);
    setSuccess(true);
    fetch(forecastType[value])
      .then((res) => res.json())
      .then((data) => {
        if (value > 1) {
          setWeatherInfo1Day(data.DailyForecasts);
        } else {
          setWeatherInfoHour(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setLoading(false);
      });
  }, [value]);

  if (value > 1) {
    const weatherInfo = weatherInfo1Day;
    return { weatherInfo, loading, success };
  }

  const weatherInfo = weatherInfoHour;
  return { weatherInfo, loading, success };
}
