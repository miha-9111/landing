import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor() {}

  getForecast() {
    return  this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', '66031ffe2ecb0dd8e7cfbc477d0d4e99')
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
