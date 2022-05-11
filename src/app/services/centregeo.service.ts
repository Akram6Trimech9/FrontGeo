import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CentregeoService {

  constructor(private http:HttpClient) { }
  url = 'http://127.0.0.1:3001/centreGeo';
  addcentre(centre :any , id:any ):Observable<any>{
    return  this.http.post<any>(`${this.url}/${id}`,centre) 
  }
  getallcentres() : Observable<any[]>  {
    return this.http.get<any[]>(`${this.url}/`);
  } 
  deleteCentre(id:any): Observable<any>{
return this.http.delete<any>(`${this.url}/${id}`)
  }
  getcentreByregion(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
  getcentreByid(id:any) : Observable<any>{
    return this.http.get<any>(`${this.url}/getcentre/${id}`)
  }

  UpdateCentre(centre:any , id :any ){
    return this.http.patch<any>(`${this.url}/${id}`,centre)
  }
}


