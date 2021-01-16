import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { CityWeather, WeatherType } from './city-weather.model';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() cityName: string;
  weather$: Observable<CityWeather>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeatherByCity(this.cityName);
  }

  getWeatherName(weatherName?: WeatherType): string {
    switch (weatherName) {
      case WeatherType.Clouds:
        return 'clouds';
      case WeatherType.Snow:
        return 'snow';
      default:
        return 'sun';
    }
  }

}
