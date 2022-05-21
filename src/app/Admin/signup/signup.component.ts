import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Admin} from  'src/app/Models/admin';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	myForm!: FormGroup   ;
  constructor(private Fb:FormBuilder ,
    private router:Router ,
    private authService:AuthService,
    ){
      let formcontrols={
        nom :new FormControl('',[Validators.required,Validators.minLength(3)]),
        prenom :new FormControl('',[Validators.required,Validators.minLength(4)]),
        email : new FormControl('',[Validators.required,Validators.email]),
        password :  new FormControl('',[Validators.required,Validators.minLength(5)]),
    }
    this.myForm=this.Fb.group(formcontrols);
  }
  get f(){
    return this.myForm.controls ; 
  }
  roleType="admin" ; 
  ngOnInit(): void {
  }
    admin!:Admin
 bool=true ;
  onSubmit(){
    const formd = {
      'nom':this.myForm.value.nom, 
      'prenom':this.myForm.value.prenom, 
      'password':this.myForm.value.password,
      'email':this.myForm.value.email, 
      'roleType':this.roleType
     };

     if(this.myForm.value.password==="" && this.myForm.value.email==="" && this.myForm.value.password.minLength(3)&&this.myForm.value.email.minLength(5)){
       this.bool=false ;
     }else{
     console.log(formd)
    this.authService.signUpAdmin(formd).subscribe(
      () =>{
        console.log(formd,'in your data base ')
        const usercord = {
          'email':this.myForm.value.email, 
          'password':this.myForm.value.password
         };
        this.authService.signInAdmin(usercord).subscribe(
          (data)=>{
       this.authService.initializeLocalStorage(data.token);
       this.authService.getTokenClaims(data.token);
       setTimeout (() => {
         this.router.navigateByUrl('/adminlogin');
      }, 1500);
          }
        );
      }
    );}
    
  }
}
