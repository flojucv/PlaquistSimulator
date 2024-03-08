import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private httpClient: HttpClient
  ) { }

  private urlApi = environment.apiUrl;

  public getListActu = (): Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      this.httpClient.get(`${this.urlApi}/actualite/list`).subscribe((result) => {
        observer.next(result);
        observer.complete();
      }, (err) => {
        console.error(err);
        observer.error(err);
        observer.complete();
      })
    })
  }

  public getActualiteById = (idActualite: string): Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      this.httpClient.get(`${this.urlApi}/actualite/${idActualite}`).subscribe((result) => {
        observer.next(result);
        observer.complete();
      }, (err) => {
        console.error(err);
        observer.error(err);
        observer.complete();
      })
    })
  }
}
