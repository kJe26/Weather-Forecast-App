type WeatherForecastInfoDaily = {
  Date: string;
  EpochDate: number;
  Sun: {
    Rise: string;
    Set: string;
  };
  Moon: {
    Rise: string;
    Set: string;
  };
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
    };
    Maximum: {
      Value: number;
      Unit: string;
    };
  };
  HoursOfSun: number;
  Day: {
    Icon: number;
    ShortPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: {
      Speed: {
        Value: number;
        Unit: string;
      };
      Direction: {
        Degrees: number;
        English: string;
      };
    };
    Rain: {
      Value: number;
      Unit: string;
    };
    Snow: {
      Value: number;
      Unit: string;
    };
    Ice: {
      Value: number;
      Unit: string;
    };
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    CloudCover: number;
  };
};

type WeatherForecastInfoHours = {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: {
    Value: number;
    Unit: string;
  };
  PrecipitationProbability: number;
};

export type { WeatherForecastInfoDaily, WeatherForecastInfoHours };
