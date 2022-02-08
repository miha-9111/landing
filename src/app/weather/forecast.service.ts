import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: string;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getForecast() {
    return  this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '66031ffe2ecb0dd8e7cfbc477d0d4e99')
        }),
        switchMap(params => this.http.get<OpenWeatherResponse>(this.url, { params })),
        map((value) => {
          value.list
        })
      );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position.coords);
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  }
}
