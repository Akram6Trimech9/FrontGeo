import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http:HttpClient) { }
  url = 'http://127.0.0.1:3001/panier';
  AddPanier(panier :any ):Observable<any>{
    return  this.http.post<any>(`${this.url}/`,panier) 
  }
  getAllpanier():Observable<any>{
  return  this.http.get<any>(`${this.url}/`) 
}
getpanierbyid(id:any):Observable<any>{
  return  this.http.get<any>(`${this.url}/${id}`) 
}
deletepanier(id:any):Observable<any>{
  return  this.http.delete<any>(`${this.url}/${id}`) 
}
sendEmail(Email:any):Observable<any>{
  return this.http.post<any>(`${this.url}/sendemail`,Email)

}
  
  // getAllRegion() : Observable<any[]>  {
  //   return this.http.get<any[]>(`${this.url}/`);
  // } 
  // getRegionByid(id:any): Observable<any>{
  //   return this.http.get<any>(`${this.url}/getcommande/${id}`)
  // }
  // EditRegion( id:any) : Observable<any> {
  //   return this.http.patch<any>(`${this.url}/`,id)
  // }
  // DeleteRegion(id:any):Observable<any>{
  //   return this.http.delete<any>(`${this.url}/${id}`)
  // }
}

