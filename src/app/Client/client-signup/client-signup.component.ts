import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clientservices/client.service';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css']
})
export class ClientSignupComponent implements OnInit {
	myForm!: FormGroup   ;
  constructor(private Fb:FormBuilder ,
    private router:Router ,
    private clientservice:ClientService,
    ){
      let formcontrols={
        nom :new FormControl(),
        prenom :new FormControl(),
        email : new FormControl(),
        password :  new FormControl(),
    }
    this.myForm=this.Fb.group(formcontrols);
  }
  roleType="client" ; 
  // ngOnInit(): void {
  // }
  //   admin!:Admin

  // onSubmit(){
  //   const formd = {
  //    
  //    };

  ngOnInit(): void {
  }
  onSubmit() : void {
    const usercord={
      'nom':this.myForm.value.nom, 
          'prenom':this.myForm.value.prenom, 
          'password':this.myForm.value.password,
          'email':this.myForm.value.email, 
          'roleType':this.roleType
    }
    this.clientservice.signupclient(usercord).subscribe(res=>{
             this.router.navigateByUrl("clientlog")
     })  }

}
