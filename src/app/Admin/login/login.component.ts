import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	myForm!: FormGroup   ;
  ngOnInit(): void {
  }
   constructor(private fb:FormBuilder,
    private authService: AuthService,
    private router: Router) {
      let formcontrols={
          email : new FormControl(),
        password :  new FormControl(),
    }
    this.myForm=this.fb.group(formcontrols);
   }
  loader: boolean = false;

  role="admin"
  onSubmit(){
    this.loader = true;
    const usercord = {
      'email':this.myForm.value.email,     
       'password':this.myForm.value.password,
     };    
    console.log(usercord)
    this.authService.signInAdmin(usercord).subscribe(
      (data) => {
        console.log("ok")
        this.authService.initializeLocalStorage(data.token);
        this.authService.getTokenClaims(data.token);
        setTimeout (() => {
          this.router.navigateByUrl('/admin');
       }, 1500); }
    )
  }
}
