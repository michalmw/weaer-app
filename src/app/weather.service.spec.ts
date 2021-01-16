import { waitForAsync, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWeatherByCity(), ', () => {
    it('Should call http get and return weather', waitForAsync((done) => {
      const sampleCity = {
        coord: {lon: 19.0469, lat: 49.8224},
        name: 'Bielsko-Biala',
        polishName: 'Bielsko-Biała'
      };
      service.getWeatherByCity(sampleCity.polishName).subscribe(val => {
        expect(val.name).toBe(sampleCity.name);
        expect(val.coord).toEqual(sampleCity.coord);
      });
    }));
  });
});
