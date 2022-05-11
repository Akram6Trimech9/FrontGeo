import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CentredisService } from 'src/app/services/centredis.service';
import { FacteurService } from 'src/app/services/facteur.service';

@Component({
  selector: 'app-addf',
  templateUrl: './addf.component.html',
  styleUrls: ['./addf.component.css']
})
export class AddfComponent implements OnInit {

  form:FormGroup
  ; 
 constructor(private fb:FormBuilder,private FacteurService:FacteurService,private CentreService:CentredisService,private router:Router) { 
   let formcontrols={
    nom:new FormControl(),
    matricule:new FormControl(), 
    prenom:new FormControl(), 
    email:new FormControl(), 
    password:new FormControl(), 

     }
   this.form=this.fb.group(formcontrols)
 }


 ngOnInit(): void {
  this.getallcentre()
 }
 selectedregion:any;
 onRegionChange(ob: { value: any; }) {
   this.selectedregion = ob.value;
  console.log(this.selectedregion);
}
 allcentre:any[]=[];
 getallcentre():void{
   this.CentreService.getallcentres().subscribe(res=>{
    this.allcentre=res
    console.log( "hello ",this.allcentre)
   })
 }
 addthis(){
  let  data :any={
    "matricule":  this.form.value.matricule , 
    "nom":  this.form.value.nom , 
    "prenom":  this.form.value.prenom,
    "email":  this.form.value.email,
    "password":  this.form.value.password,

     }
   this.FacteurService.addFacteur(data,this.selectedregion).subscribe(res=>{
    this.router.navigate(['chefdash/facteur']).then(() => {
      window.location.reload();
    });  

   }) 
  
 }
 }
 
 
