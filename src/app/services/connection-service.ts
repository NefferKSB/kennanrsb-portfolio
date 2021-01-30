import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private api: string = 'http://mailthis.to/nefferKSB';

  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    return this.http.post(this.api, input, {
      responseType: 'text'
    })
    .pipe(
      map(
        (response) => {
          if(response) {
            return response;
          } else return;
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
