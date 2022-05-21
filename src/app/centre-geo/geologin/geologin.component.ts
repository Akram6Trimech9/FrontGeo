import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CentregeoService } from 'src/app/services/centregeo.service';
import { ClarityModule } from '@clr/angular';
import { CdsModule } from '@cds/angular';

@Component({
  selector: 'app-geologin',
  templateUrl: './geologin.component.html',
  styleUrls: ['./geologin.component.css']
})
export class GeologinComponent implements OnInit {
  myform:FormGroup ; 
  constructor(private fb:FormBuilder,
    private centreGeo: CentregeoService,
    private router: Router) {
    let formcontrols={
      email : new FormControl(),
      password: new FormControl()
    }
    this.myform=this.fb.group(formcontrols)
   }

  ngOnInit(): void {
  }
  onSubmit(){
    const usercord={
      'email':this.myform.value.email ,
      'password':this.myform.value.password,
    }
    console.log(usercord)
    this.centreGeo.loginCentre(usercord).subscribe((data)=>{
      this.centreGeo.initializeLocalStorage(data.token) ; 
       setTimeout(() => {
        this.router.navigateByUrl('/geointerface')
      }, 1500);
    }

    )
  }

}