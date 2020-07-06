import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackermanService {

  private backendUrl = 'localhost:3000/hackerman';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  testHackerman(): Observable<any> {
    return this.http.get<any>(this.backendUrl)
      .pipe(
        tap(_ => this.log('test hackerman')),
        catchError(this.handleError<any>('testHackerman', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

}
