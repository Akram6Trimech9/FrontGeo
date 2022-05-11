import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { chef } from '../Models/chef';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  url = 'http://127.0.0.1:3001/chef';
  token!: string;
  chefAuth!:chef ; 

  constructor(private http:HttpClient) { }

  signupchef(chef:any):Observable<any>{
    return  this.http.post<any>(`${this.url}/signup`, chef);
  }
  signInchef(chef:any): Observable<any> {
    return  this.http.post<any>(`${this.url}/login`, chef);
  }
  loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null ;
  }

  logOut(): void{
    this.token ='';
    localStorage.removeItem('access_token');
  }
  
  getchefloggedin(token : any){
    this.token = token;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.getchef(tokenInfo.chef_id).subscribe(
      (data) =>{
return data
      }
    );
   }
  getTokenClaims(token: any){
    this.token = token;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));
    this.getchef(tokenInfo.chef_id).subscribe(
      (data) =>{
        this.initializeremployeeAuth(data);
      }
    ); }
    initializeLocalStorage(token: string): void{
      localStorage.setItem('access_token', token);
    }
    initializeremployeeAuth(chef: chef): void{
        this.chefAuth = chef;
    }
    getchef(chefid: string ): Observable<any>{
      return this.http.get<any>(`${this.url}/getchef/${chefid}`)
       }   
       gellchefs():Observable<any[]> {
         return this.http.get<any[]>(`${this.url}/getAll`)
       }
}
