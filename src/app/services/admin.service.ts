import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://127.0.0.1:3001/admin';
  constructor(private http: HttpClient) { }
  getAdmin(admin_id: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.url}/${admin_id}`);
  }

  addAdmin(admin: any): Observable<Admin> {
    return  this.http.post<Admin>(`${this.url}/signup`, admin);
  }
  updateAdmin(admin_id:string, adminCor: any): Observable<any> {
    return this.http.post<any>(`${this.url}/${admin_id}`, adminCor);
  }}
