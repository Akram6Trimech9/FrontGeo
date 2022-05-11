import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Client, ClientLoginDto } from 'src/app/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   public readonly uri="http://127.0.0.1:3001"
   clients:any=[]; 
   token!:string ; 
   clientAuth!:any ; 
  constructor( private http:HttpClient, 
    private router :Router ) { }
  public GetTokenByid(client:ClientLoginDto): Observable<number>{
    const subject=new Subject<number>();
  this.http.post(this.uri+'/client/login',client).subscribe(
    result=>{
      const token=(result as any).token
      const id=(result as any ).id
      localStorage.setItem('jwt',token);
        subject.next(id)
    },
    error=>{
      localStorage.removeItem('jwt')
      console.error(error)
      subject.next(0)
    }
  )
  return subject.asObservable()
  }
  signupclient(usercord:any) : Observable<any>{
    return this.http.post<any>(`${this.uri}/client/registr`,usercord)
  }
  getuserbyid(id:any) : Observable<any[]>  {
    return this.http.get<any[]>(`${this.uri}/client/getClient/${id}`);
  } 
    

//   singupEmployee(employeecor:any): Observable<any> {
//     return  this.http.post<any>(`${this.url}/register`, employeecor);
//   }

  
//    signInemployee(employeecor:any): Observable<any> {
//     return  this.http.post<any>(`${this.url}/login`, employeecor);
//   }

 loggedIn(): boolean {
     return localStorage.getItem('access_token') !== null ;
  }

 logOut(): void{
    this.token ='';
    localStorage.removeItem('access_token');
 }

  getuserloggedin(token : any){
 this.token = token;
    var base64Url = token.split('.')[1];
   var base64 = base64Url.replace('-', '+').replace('_', '/');
   var tokenInfo = JSON.parse(window.atob(base64));
 this.getuserbyid(tokenInfo.Client_id).subscribe(
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
     this.getuserbyid(tokenInfo.Client_id).subscribe(
       (data:any) =>{
         this.initializeremployeeAuth(data);
       }
  ); }
  initializeLocalStorage(token: string): void{
     localStorage.setItem('access_token', token);
  }
   initializeremployeeAuth(client: Client): void{
   this.clientAuth = client;
     }
//   updateclient(employee_id ,newemployee: any ) : Observable<any>{
//     return this.http.post<any>(`${this.url}/update/${employee_id}`,newemployee)
//   }
}

