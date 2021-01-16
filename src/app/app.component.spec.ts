import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let componentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    componentFixture = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(componentFixture).toBeTruthy();
  });

  it('should be 5 cities in array', () => {
    const citiesLength = componentFixture.citiesName.length;
    expect(citiesLength).toBe(5);
  });

});
