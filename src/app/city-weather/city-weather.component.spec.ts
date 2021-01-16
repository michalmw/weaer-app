import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather.service';

import { CityWeatherComponent } from './city-weather.component';
import { WeatherType } from './city-weather.model';

describe('CityCardComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ],
      providers: [WeatherService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getWeatherName(), ', () => {
    it('empty value should return default value', () => {
      const className = component.getWeatherName();
      expect(className).toBe('sun');
    });
    it('Clouds should return clouds value', () => {
      const className = component.getWeatherName(WeatherType.Clouds);
      expect(className).toBe('clouds');
    });
    it('Snow should return snow value', () => {
      const className = component.getWeatherName(WeatherType.Snow);
      expect(className).toBe('snow');
    });
  });
});
