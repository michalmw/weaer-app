export enum WeatherType {
  Clouds,
  Snow,
  Sun
}

export interface CityWeatherDetails {
  main: WeatherType;
}

export interface CityWeather {
  coord: {
    lon: number;
    lat: number;
  };
  name?: string;
  country: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number
  };
  weather: CityWeatherDetails[];
}
