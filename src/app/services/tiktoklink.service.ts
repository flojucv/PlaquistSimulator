import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiktoklinkService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getInfoTiktok = (linkTiktok: string): Observable<any> => {
    return new Observable<any>((observer: Observer<any>) => {
      async function tiktok() {
        await fetch("https://vm.tiktok.com/ZGeUAFToo/", {headers: {"Content-Type": "application/json"}}).then(async (res) => {
          await fetch(`https://www.tiktok.com/oembed?url=${res.url}`).then((toJson) => {
            toJson.json().then((reponse2) => {
              observer.next(reponse2);
              observer.complete();
            })
          })
        })
      }
      tiktok();
    })

  }
}
