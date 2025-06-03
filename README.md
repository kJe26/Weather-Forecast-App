# Weather Forecast App

## Overview

The Weather Forecast App is a modern, responsive web application that provides real-time weather information for any city worldwide. Utilizing the AccuWeather API, the app offers forecast for the next 1 hour/12 hours/24 hours, and an intuitive user interface designed for seamless user experience.

## Features

- **City Search**: Search for any city to retrieve its current weather and forecast.
- **Forecast for the next 1 hour/12 hours**: Displays temperature, humidity, and weather conditions.
- **Forecast for the next 24 hours**: Provides detailed information such as sun and moon state, wind, weather conditions, temperature informations.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Error Handling**: Gracefully handles errors such as invalid city names or API issues.

## Technical Documentation

### Technologies Used

- **Framework**: React.js
- **Language**: TypeScript
- **Bundler**: Vite
- **Styling**: Material UI
- **API**: AccuWeather API
- **Code Quality Tools**: ESLint, Prettier

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kJe26/Weather-Forecast-App.git
   cd Weather-Forecast-App
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```env
   VITE_ACCUWEATHER_API_KEY=your_api_key_here
   VITE_LOCATIONS_URL=api_location_fetch_url
   VITE_WEATHER_INFO_URL=api_forecast_fetch_url
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173`.

### Project Structure

```
Weather-Forecast-App/
├── public/
│   └── <static icons for weather> 
├── src/                          - source folder for the application
│   ├── components                - reusable components (ex. Card, Panel, GridItem)
|   ├── context                   - ThemeContext for managing the theme
│   ├── hooks                     - custom hooks used to fetch data
│   ├── types                     - type definitions for TypeScript
│   ├── App.tsx                   - main application component
│   ├── main.tsx                  - entrypoint of the application
│   └── static                    - css files
├── .env
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Hooks Used and Created

#### 1. `useColors` (Custom Hook)

- **Purpose**: Provides theme-based color values (`textColor`, `backgroundColor`, etc.).
- **How it works**: Uses `useContext(ThemeContext)` to return color values from `themeColors`.
- **Why**: Ensures consistent theming and centralizes theme logic.

#### 2. `useColor` (Custom Hook)

- **Purpose**: Returns a specific color based on the current theme.
- **How it works**: Also uses `useContext(ThemeContext)` to extract a single color key.
- **Why**: Handy when only one color value is needed.

#### 3. `useLocations` (Custom Hook)

- **Purpose**: Fetches a list of locations based on user input.
- **How it works**: Utilizes `useQuery` from React Query for data fetching with caching.
- **Why**: Simplifies API management and keeps network traffic efficient.

#### 4. `useLocationWeather` (Custom Hook)

- **Purpose**: Fetches weather data (hourly or daily) for a specific location.
- **How it works**: Uses `useEffect` and `useState` to fetch and manage weather data based on forecast type.
- **Why**: Separates fetch logic from components and supports multiple forecast types.

#### 5. React Hooks Used

- **`useState`**: Manages local state for UI components (e.g., theme, loading, selected tab).
- **`useEffect`**: Handles side effects like data fetching in `useLocationWeather`.
- **`useContext`**: Accesses theme data in `useColors` and `useColor`.
- **`useMemo`**: Optimizes performance by memoizing the locations array in `LocationBox`.
- **`useCallback`**: Prevents unnecessary re-renders for input handlers in `LocationBox`.

### Future Possible Improvements and New Features

- **Geolocation Support**: Automatically detect user's location to display local weather.
- **Unit Conversion**: Allow users to switch between Celsius and Fahrenheit.
- **Search History**: Maintain a history of searched cities for quick access.
- **Testing**: Add unit and integration tests to ensure code reliability.

---

For more details, visit the [GitHub repository](https://github.com/kJe26/Weather-Forecast-App).