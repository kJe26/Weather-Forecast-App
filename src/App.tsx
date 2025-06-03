import { useState } from 'react';
import useLocations from './hooks/useLocations';
import './static/App.css';
import { ThemeContext, ThemeType } from './context/theme.context';
import AppBody from './components/AppBody';


function App() {
  const [query, setQuery] = useState('Cluj');
  const [pickedLocation, setPickedLocation] = useState<number>(0);
  const { data: locations = [], isLoading, isError } = useLocations(query);
  const [theme, setTheme] = useState<ThemeType>('dark');
  
  return (
    <ThemeContext.Provider value={theme}>
      <AppBody 
        pickedLocation={pickedLocation}
        setPickedLocation={setPickedLocation}
        locations={locations}
        isLoading={isLoading}
        isError={isError}
        theme={theme}
        setTheme={setTheme}
        query={query}
        setQuery={setQuery}
      />
    </ThemeContext.Provider>
  );
}

export default App;
