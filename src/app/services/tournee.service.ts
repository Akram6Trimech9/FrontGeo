import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourneeService {
  url = 'http://127.0.0.1:3001/tournee';
  constructor(private http:HttpClient) { }
  getallTouree():Observable<any>{
    return this.http.get<any>(`${this.url}/`)
  }
  deleteTourne(id:any ):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }
  gettourneeByid(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
  deletetournee(id:any): Observable<any>{
  return   this.http.delete<any>(`${this.url}/${id}`)
  }
  updatetournee(data:any,id:any):Observable<any>{
    return this.http.patch<any>(`${this.url}/${id}}`,data)
  }
  posttournee(id:any,data:any):Observable<any>{
return this.http.post<any>(`${this.url}/${id}`,data)
  }
  gettournebyfacteur(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getbyfacteur/${id}`)
  }

}
