import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = 'http://127.0.0.1:3001/activity';

  constructor(private http:HttpClient) { }
  
  getallActivities() : Observable<any>{
 return this.http.get<any>(`${this.url}/`)
  }
  deleteActivity(id:any ): Observable<any>{
     return this.http.delete<any>(`${this.url}/${id}`)
  }
  postActivity(id:any,formdata:any):Observable<any>{
    return this.http.post<any>(`${this.url}/${id}`,formdata)
  }
  
}
