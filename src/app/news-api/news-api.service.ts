import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '2a13be401d4541c9bbd9f46e4ae7cda8';
  private country = 'us';

  pagesInput: Subject<number>;
  pagesOutput: Observable<any>;
  numberOfPages: Subject<number>;

  constructor() {
    this.pagesInput = new Subject();
    this.pagesInput = this.pagesInput.pipe(
      
    );
  }
}
