import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

   
  constructor(private http:HttpClient) { }
  url = 'http://127.0.0.1:3001/region';
  Addregion(region :any ){
    return  this.http.post<any>(`${this.url}/`,region) 
  }
  getAllRegion() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/`);
  } 
  // getRegionByid(id:any): Observable<any>{
  //   return this.http.get<any>(`${this.url}/getcommande/${id}`)
  // }
  EditRegion( id:any) : Observable<any> {
    return this.http.patch<any>(`${this.url}/`,id)
  }
  DeleteRegion(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }
}
