import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Facteur, FacteurLoginDto } from '../Models/Facteur';

@Injectable({
  providedIn: 'root'
})
export class FacteurService {
  url = 'http://127.0.0.1:3001/facteur';
  constructor(private http:HttpClient) { }
 
  getallfacteur() : Observable<any>{
    return this.http.get<any>(`${this.url}/getall`)  }
    deleteFacteur(id : string) : Observable<any>{
return this.http.delete<any>(`${this.url}/${id}`)
}
 addFacteur(facteur:any ,id: any) :Observable<any>{
   return this.http.post<any>(`${this.url}/postfacteur/${id}`,facteur)
 }
 updatefacteur(facteur:any ,id :any ):Observable<any>{
   return this.http.patch<any>(`${this.url}/${id}`,facteur)
 }
 getfacteurbyid( id :any ):Observable<any>{
  return this.http.get<any>(`${this.url}/${id}`)
}
   clients:any=[]; 
   token!:string ; 
   clientAuth!:any ; 
  public GetTokenByid(Facteur:FacteurLoginDto): Observable<number>{
    const subject=new Subject<number>();
  this.http.post(this.url+'/login',Facteur).subscribe(
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
 
  getFacteurByid(id:any) : Observable<any>  {
    return this.http.get<any>(`${this.url}/${id}`);
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
 this.getFacteurByid(tokenInfo.Facteur_id).subscribe(
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
     this.getFacteurByid(tokenInfo.Facteur_id).subscribe(
       (data:any) =>{
         this.initializeremployeeAuth(data);
       }
  ); }
  initializeLocalStorage(token: string): void{
     localStorage.setItem('access_token', token);
  }
   initializeremployeeAuth(facteur: Facteur): void{
   this.clientAuth = facteur;
     }
  getFacteurbyid(id:any): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }   
//   updateclient(employee_id ,newemployee: any ) : Observable<any>{
//     return this.http.post<any>(`${this.url}/update/${employee_id}`,newemployee)
//   }
}


 