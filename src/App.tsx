import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import useLocations from './hooks/useLocations';
import LocationBox from './components/LocationBox';
import WeatherPredictionSelector from './components/WeatherPredictionSelector';
import './static/App.css';

function App() {
  const [query, setQuery] = useState('Cluj');
  const { locations } = useLocations(query);
  const [pickedLocation, setPickedLocation] = useState<number>(0);

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
      {pickedLocation > 0 && <WeatherPredictionSelector pickedLocation={pickedLocation} />}
    </Container>
  );
}

export default App;
