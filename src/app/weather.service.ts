import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityWeather } from './city-weather/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(cityName: string): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.apiUrl}weather?q=${cityName}&units=metric&appId=${environment.apiKey}`);
  }
}
