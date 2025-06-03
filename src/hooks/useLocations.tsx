import { useQuery } from '@tanstack/react-query';

type Location = {
  LocalizedName: string;
  Key: number;
};

type FetchedLocation = {
  label: string;
  id: number;
};

const fetchLocations = async (query: string): Promise<FetchedLocation[]> => {
  const res = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${
      import.meta.env.VITE_ACCUWEATHER_API_KEY
    }&q=${query}`,
  );

  const data = await res.json();

  if (!Array.isArray(data)) return [];

  return data.map((location: Location) => ({
    label: location.LocalizedName,
    id: location.Key,
  }));
};

export default function useLocations(query: string = 'Cluj') {
  return useQuery({
    queryKey: ['locations', query],
    queryFn: () => fetchLocations(query),
  });
}
