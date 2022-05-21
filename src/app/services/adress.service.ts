import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  url = 'http://127.0.0.1:3001/adress';
  constructor(private http  : HttpClient) { }
    getAdByactivity(id : any) : Observable<any>{
        return this.http.get<any>(`${this.url}/getbyactivity/${id}`)
    }
    postaddress(idtourne:any,idregion:any,adresse:any) : Observable<any>{
      return this.http.post<any>(`${this.url}/${idtourne}/${idregion}`,adresse)
    }
    getallAdress():Observable<any>{
      return this.http.get<any>(`${this.url}/`)
    }
    updateAdress(id:any,adress:any):Observable<any>{
      return this.http.patch<any>(`${this.url}/${id}`,adress)
    }
    getAdressByid(id:any):Observable<any>{
      return this.http.get<any>(`${this.url}/${id}`)
    }
    getaddressbyregion(id:any):Observable<any>{
      return this.http.get<any>(`${this.url}/getadressbyregion/${id}`)
    }
    

    deleteAdress(id:any):Observable<any>{
      return this.http.delete<any>(`${this.url}/${id}`)
    }
  


}
