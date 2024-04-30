// weather.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public weather: any;
  public error: string | null = null;

  constructor(private weatherService: WeatherService) { }

  getWeather(locationInput: HTMLInputElement): void {
    const location = locationInput.value;
    this.weatherService.getWeather(location).subscribe({
      next: (data) => {
        this.weather = data;
        this.error = null;
      },
      error: (err) => {
        console.error('Failed to fetch weather:', err);
        this.error = 'Failed to fetch weather. Please check the location.';
      }
    });
  }
}
