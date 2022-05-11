import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-cheflogin',
  templateUrl: './cheflogin.component.html',
  styleUrls: ['./cheflogin.component.css']
})
export class ChefloginComponent implements OnInit {

  myform:FormGroup ; 
  constructor(private fb:FormBuilder,
    private chefService: ChefService,
    private router: Router) {
    let formcontrols={
      email : new FormControl(),
      password: new FormControl()
    }
    this.myform=this.fb.group(formcontrols)
   }

  ngOnInit(): void {
  }
  submit(){
    const usercord={
      'email':this.myform.value.email ,
      'password':this.myform.value.password,
    }
    console.log(usercord)
    this.chefService.signInchef(usercord).subscribe((data)=>{
      this.chefService.initializeLocalStorage(data.token) ; 
      this.chefService.getTokenClaims(data.token);
      setTimeout(() => {
        this.router.navigateByUrl('/chefdash')
      }, 1500);
    }

    )
  }

}
// clientlog!:ClientLoginDto ; 
//  invalidLogin!:Boolean ; 
//  client
//   constructor(private router:Router ,private loginServie:ClientService) { 
//     this.client=new  Client()
//   }

//   ngOnInit(): void {
//   }
//     ClientId: any ; 
//     onSubmit(f:NgForm) : void {
//     console.log(f.value)
//      this.loginServie.GetTokenByid(f.value).subscribe((id)=>{
//       console.log(id)
//       this.invalidLogin=id===0 ; 

//     if(!this.invalidLogin){
//       this.router.navigate([`/dash/`+id])
//     }
//   })
//    }
// }
