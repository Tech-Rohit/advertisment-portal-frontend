import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private baseURL = `http://localhost:7000/api`

  createAdvertisement(data:any | JSON){
    return this.http.post('http://localhost:7000/api/ads/create', data);
  }

  //Update Advertisement
  updateAdvertisement(data: any, id: any): Observable<any> {
    console.log(typeof id);
    return this.http.put(`${this.baseURL}/ads/update/${id}`, data)
}

  // fetchAdvertisementList(){
  //   return this.http.get('http://localhost:7000/api/ads/list');
  // }
  /** DELETE: delete the Advertisement from the server */
// deleteAd(id :any ): Observable<any> {
//   // const url = `${this.heroesUrl}/${id}`;
//   return this.http.delete<any>(`http://localhost:7000/api/ads/delete/:id`)
// }
}
