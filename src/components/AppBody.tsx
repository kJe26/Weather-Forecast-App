import { Box, CircularProgress, Container, Switch, Typography } from '@mui/material';
import LocationBox from './LocationBox';
import WeatherPredictionSelector from './WeatherPredictionSelector';
import { ThemeType, useColors } from '../context/theme.context';
import { FetchedLocation } from '../hooks/useLocations';

type Props = {
  pickedLocation: number;
  setPickedLocation: (location: number) => void;
  locations: FetchedLocation[];
  isLoading: boolean;
  isError: boolean;
  theme: ThemeType;
  setTheme: (theme: ThemeType | any) => void;
  query: string;
  setQuery: (query: string) => void;
}

export default function AppBody(props: Props) {
  const { primaryColor, textColor, backgroundColor } = useColors();
  const { 
    pickedLocation,
    setPickedLocation,
    locations,
    isLoading,
    isError,
    theme,
    setTheme,
    query,
    setQuery
  } = props

  const handleThemeChange = () => {
    setTheme((prevTheme: ThemeType) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Box sx={{
      backgroundColor: backgroundColor,
      color: textColor,
      minHeight: '100%',
      width: '100%',
      position: 'relative',
    }}>
      <Container maxWidth="md" sx={{
        pt: '2rem',
      }}>
        <Box display={'flex'} justifyContent="center" alignItems="center" >
          <Typography variant="h6" sx={{ color: textColor, marginRight: 2 }}>
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </Typography>
          <Switch sx={{ 
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: primaryColor,
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: primaryColor,
              },
            }}
            checked={theme === 'light'}
            value={theme}
            onChange={handleThemeChange}
          />
        </Box>
        <Typography variant="h2" sx={{ marginBottom: 10, marginTop: 5, color: textColor }}>
          Welcome to <span className="app-name" style={{ color: `${primaryColor}` }}>SkySync</span>
        </Typography>
        <LocationBox
          locations={locations}
          query={query}
          setQuery={setQuery}
          pickedLocation={pickedLocation}
          setPickedLocation={setPickedLocation}
        />
        {isLoading && <CircularProgress sx={{ marginTop: 3 }}/>}
        {isError && <Typography color="error" my={3}>Error fetching locations</Typography>}
        {pickedLocation > 0 && <WeatherPredictionSelector pickedLocation={pickedLocation} />}
      </Container>
    </Box>
  )
}
