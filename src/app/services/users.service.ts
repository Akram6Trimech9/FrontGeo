import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient) { }
  url = 'http://127.0.0.1:3001/client';

  getAllusers() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/`);
  } 
  Deletuser(id:any): Observable<any>{
    return this.http.delete<any>(`${this.url}/delete/${id}`)
  }
}
