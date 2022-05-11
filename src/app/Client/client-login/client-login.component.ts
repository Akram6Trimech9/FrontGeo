import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
 import { subscribeOn } from 'rxjs';
import {  Client, ClientLoginDto } from 'src/app/Models/Client';
import { ClientService } from 'src/app/services/clientservices/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
 clientlog!:ClientLoginDto ; 
 invalidLogin!:Boolean ; 
 client
  constructor(private router:Router ,private loginServie:ClientService) { 
    this.client=new  Client()
  }

  ngOnInit(): void {
  }
    ClientId: any ; 
    onSubmit(f:NgForm) : void {
    console.log(f.value)
     this.loginServie.GetTokenByid(f.value).subscribe((id)=>{
      console.log(id)
      this.invalidLogin=id===0 ; 

    if(!this.invalidLogin){
      this.router.navigate([`/dash/`+id])
    }
  })
   }
}
