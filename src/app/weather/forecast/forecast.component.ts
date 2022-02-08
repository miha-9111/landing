import { Component, OnInit } from '@angular/core';
import { ForecastService } from "../forecast.service";

interface ForecastData {
  dateString: string;
  temp: string;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastData: ForecastData[] = [];

  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    this.forecastService.getForecast().subscribe(forecastData => {
        console.log(forecastData);
        this.forecastData = forecastData;
    });
  }
}
