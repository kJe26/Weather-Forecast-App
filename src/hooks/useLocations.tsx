import { useEffect, useState } from 'react';

type Location = {
  LocalizedName: string;
  Key: number;
};

type FetchedLocation = {
  label: string;
  id: number;
};

export default function useLocations(query: string = 'a') {
  const [locations, setLocations] = useState<FetchedLocation[]>([]);

  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }&q=${query}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data !== null && data !== undefined) {
          const fetchedLocations = data.map((location: Location) => ({
            label: location.LocalizedName,
            id: location.Key,
          }));

          setLocations(fetchedLocations);
        }
      })
      .catch((err) => console.log(err));
  }, [query]);

  return { locations };
}
