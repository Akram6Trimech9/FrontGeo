import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CentregeoService } from 'src/app/services/centregeo.service';
import { ChefService } from 'src/app/services/chef.service';
import { RegionsService } from 'src/app/services/regions.service';

@Component({
  selector: 'app-georegistre',
  templateUrl: './georegistre.component.html',
  styleUrls: ['./georegistre.component.css']
})
export class GeoregistreComponent implements OnInit {

  Myform!: FormGroup;

  constructor(private router:Router,private Fb: FormBuilder ,private centregeoservice:CentregeoService , private regionservice:RegionsService ) { 
    let formcontrols = {
      nom: new FormControl(),
      tel: new FormControl(),
      fax: new FormControl(),
      email: new FormControl(),
      longitude: new FormControl(),
      latitude: new FormControl(),

      password: new FormControl()} 
     this.Myform = this.Fb.group(formcontrols);
  }
  selectedRegion:any;
    Function(id:any){
      this.selectedRegion=id
      console.log(id)
      }
  regions:any[]=[];
getregions(){
  this.regionservice.getAllRegion().subscribe(res=>{
 this.regions=res;
 console.log(this.regions)
  })
}

  ngOnInit(): void {

    this.getregions()
  }
   onSubmit() {
    const usercord={
            'nom':this.Myform.value.nom, 
                'tel':this.Myform.value.tel, 
                'fax':this.Myform.value.fax, 
                'password':this.Myform.value.password,
                'email':this.Myform.value.email, 
                'location':{
                  'longitude':Number(this.Myform.value.longitude),
                  'latitude':Number(this.Myform.value.latitude)
                },
           }
           console.log(usercord)
    this.centregeoservice.addcentre(usercord,this.selectedRegion).subscribe(res=>{
      console.log('ok')
                   if(res){
                     const centre:any={
                       'email':this.Myform.value.email ,
                       'password':this.Myform.value.password
                     }
                     console.log(centre)
                     this.centregeoservice.loginCentre(centre).subscribe(()=>{
                      this.router.navigateByUrl('/geointerface')
                      console.log('logged in')
                     })
                   }
                  //  this.router.navigateByUrl("")

    })
  }
}