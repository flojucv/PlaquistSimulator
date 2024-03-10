import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private httpClient: HttpClient
  ) { }

  private urlApi = environment.apiUrl;
  private corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  public getListActu = (): Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      this.httpClient.get(`${this.urlApi}/actualite/list`, {headers: this.corsHeaders}).subscribe((result) => {
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
      this.httpClient.get(`${this.urlApi}/actualite/${idActualite}`, {headers: this.corsHeaders}).subscribe((result) => {
        observer.next(result);
        observer.complete();
      }, (err) => {
        console.error(err);
        observer.error(err);
        observer.complete();
      })
    })
  }

  public getListPatchNote = ():Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      this.httpClient.get(`${this.urlApi}/patchNote/list`, {headers: this.corsHeaders}).subscribe((result) => {
        observer.next(result);
        observer.complete();
      }, (err) => {
        console.error(err);
        observer.error(err);
        observer.complete();
      })
    })
  }

  public getPatchNoteById = (id: string) :Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      this.httpClient.get(`${this.urlApi}/patchNote/${id}`, {headers: this.corsHeaders}).subscribe((result) => {
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
