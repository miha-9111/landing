import { Component } from '@angular/core';
import { ForecastService } from "../forecast.service";
import { Observable } from "rxjs";

interface forecastData {
  dateString: string;
  temp: number;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  forecast$: Observable<forecastData[]>;

  constructor(private forecastService: ForecastService) {
    this.forecast$ = forecastService.getForecast();
  }
}
