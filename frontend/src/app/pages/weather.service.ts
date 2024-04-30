
// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'ebf52f5e2a54ca1daa14a95cbd9b661a';  // Replace with your actual API key
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}?q=${location}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
