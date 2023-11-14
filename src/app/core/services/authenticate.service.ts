import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  login(data: {email: string, password: string}):
    Observable<any> {
      return this.http.post<any>(
        `${environment.authURL}/authenticate`,
        data).pipe(
          tap((data: any) => data),
          catchError(err => throwError(() => err))
        )
    }

    register(data: {email: string, password: string}):
      Observable<any> {
        return this.http.post<any>(
          `${environment.authURL}/register`, data).pipe(
            tap((data: any) => data),
            catchError(err => throwError(() => err))
          )
      }
}
