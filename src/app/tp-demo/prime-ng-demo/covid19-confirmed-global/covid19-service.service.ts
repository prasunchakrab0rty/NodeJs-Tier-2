import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('../../../../assets/covid19.json')
      .toPromise()
      .then((res: any) => res)
    // .then(data => {
    //   return data;
    // });
  }
}
