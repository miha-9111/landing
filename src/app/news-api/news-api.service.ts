import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, switchMap, tap } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

interface NewsApiResponse {
  totalResults: number;
  articles: {
    title: string;
    url: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '2a13be401d4541c9bbd9f46e4ae7cda8';
  private country = 'us';

  private pagesInput: Subject<number>;
  pagesOutput: Observable<any>;
  numberOfPages: Subject<number>;

  constructor(private http: HttpClient) {
    this.numberOfPages = new Subject();

    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(
      map(page => {
        return new HttpParams()
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('pageSize', String(this.pageSize))
          .set('page', String(page));
      }),
      switchMap(params => {
        return this.http.get<NewsApiResponse>(this.url, { params });
      }),
      tap(response => {
        const totalPages = Math.ceil(response.totalResults / this.pageSize);
        this.numberOfPages.next(totalPages);
      }),
      pluck('articles')
    );
  }

  getPage(page: number) {
    this.pagesInput.next(page);
  }
}
