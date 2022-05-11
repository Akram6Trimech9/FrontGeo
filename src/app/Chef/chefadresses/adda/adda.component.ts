import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdressService } from 'src/app/services/adress.service';
import { TourneeService } from 'src/app/services/tournee.service';

@Component({
  selector: 'app-adda',
  templateUrl: './adda.component.html',
  styleUrls: ['./adda.component.css']
})
export class AddaComponent implements OnInit {
  form:FormGroup
  ; 
 constructor(private fb:FormBuilder,private adressService:AdressService,private tourneeService:TourneeService,private router:Router) { 
  let formcontrols={
    title:new FormControl(),
    longitude:new FormControl(), 
    latitude:new FormControl(), 
    floor:new FormControl(), 
    apartNumber:new FormControl(),
    tournee: [null, Validators.required],

    }
   this.form=this.fb.group(formcontrols)
 }


 ngOnInit(): void {
  this.getalltounrr()
 }
 selectedtournee:any;
 ontourneeChange(ob: { value: any; }) {
   this.selectedtournee = ob.value;
  console.log(this.selectedtournee);
}
 tournees:any[]=[];
 getalltounrr():void{
   this.tourneeService.getallTouree().subscribe(res=>{
    this.tournees=res
    console.log( "hello ",this.tournees)
   })
 }
 addthis(){
  let  data :any={
    "title":  this.form.value.title , 
    "location":{
      "longitude": Number( this.form.value.longitude) ,
      "latitude":  Number( this.form.value.latitude) ,
    },
    "building":{
      "floor": Number( this.form.value.floor) ,
      "apartNumber":  Number( this.form.value.apartNumber) ,
    }}
   this.adressService.postaddress(this.selectedtournee,data).subscribe(res=>{
    this.router.navigate(['chefdash/adresses']).then(() => {
      window.location.reload();
    });  

   }) 
  
 }
 }
 
 
