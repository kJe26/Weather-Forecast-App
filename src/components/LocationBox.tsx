import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ChangeEvent, SyntheticEvent, useCallback } from 'react';
import '../static/LocationBox.css';

type Location = {
  label: string;
  id: number;
};

type Props = {
  locations: Location[];
  query: string;
  setQuery: (newValue: string) => unknown;
  pickedLocation: number;
  setPickedLocation: (newValue: number) => unknown;
};

export default function LocationBox(props: Props) {
  const { locations, query, setQuery, setPickedLocation } = props;

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value), [setQuery]);

  const handleAutocompleteChange = (_event: SyntheticEvent, value: Location | null) => {
    if (value) {
      setPickedLocation(value.id);
    } else {
      setPickedLocation(0);
    }
  };

  return (
    <div className="LocationBox">
      <Autocomplete
        disablePortal
        id="combo-box"
        options={locations || []}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300, margin: 'auto', marginBottom: 10 }}
        renderInput={(params) => (
          <TextField {...params} label="Search for a location" value={query} onChange={handleChange} />
        )}
        renderOption={(oldProps, option) => (
          <li {...oldProps} key={option.id}>
            {option.label}
          </li>
        )}
        onChange={handleAutocompleteChange}
      />
    </div>
  );
}
