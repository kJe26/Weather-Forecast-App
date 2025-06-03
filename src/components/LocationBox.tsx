import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ChangeEvent, SyntheticEvent, useCallback, useMemo } from 'react';
import { useColors } from '../context/theme.context';

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

  const { textColor } = useColors();

  const memoizedOptions = useMemo(() => locations || [], [locations]);

  return (
    <div className="LocationBox">
      <Autocomplete
        disablePortal
        id="combo-box"
        options={memoizedOptions}
        getOptionLabel={(option) => option.label}
        sx={{ 
          width: 300, 
          margin: 'auto', 
          marginBottom: 10,
          '& label': {
            color: textColor,
          },
          '& label.Mui-focused': {
            color: textColor,
          },
          '& .MuiOutlinedInput-root': {
            color: textColor,
            '& fieldset': {
              borderColor: textColor,
            },
            '&:hover fieldset': {
              borderColor: textColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: textColor,
            },
          },
          '& svg': {
            color: textColor,
          },
        }}
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
