import { CircularProgress, Container, Typography } from '@mui/material';
import { useState } from 'react';
import useLocations from './hooks/useLocations';
import LocationBox from './components/LocationBox';
import WeatherPredictionSelector from './components/WeatherPredictionSelector';
import './static/App.css';


function App() {
  const [query, setQuery] = useState('Cluj');
  const [pickedLocation, setPickedLocation] = useState<number>(0);
  const { data: locations = [], isLoading, isError } = useLocations(query);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" sx={{ marginBottom: 10, marginTop: 5 }}>
        Welcome to <span className="app-name">SkySync</span>
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
  );
}

export default App;
