import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';
import { TourneeService } from 'src/app/services/tournee.service';

@Component({
  selector: 'app-addt',
  templateUrl: './addt.component.html',
  styleUrls: ['./addt.component.css']
})
export class AddtComponent implements OnInit {
  form:FormGroup
  ; 
 constructor(private fb:FormBuilder,private FacteurService:FacteurService,private tourneeService:TourneeService,private router:Router) { 
  let formcontrols={
    parite:new FormControl(),
    numDebut:new FormControl(), 
    numFin:new FormControl(), 
    codetype:new FormControl(), 
    npmtype:new FormControl(),
    nomvoi:new FormControl(),
    facteur: [null, Validators.required],

    }
   this.form=this.fb.group(formcontrols)
 }


 ngOnInit(): void {
  this.getallfacteurs()
 }
 selectedfacteur:any;
 onfacteurchange(ob: { value: any; }) {
   this.selectedfacteur = ob.value;
  console.log(this.selectedfacteur);
}
 Facteurs:any[]=[];
 getallfacteurs():void{
   this.FacteurService.getallfacteur().subscribe(res=>{
    this.Facteurs=res
    console.log( "hello ",this.Facteurs)
   })
 }
 addthis(){
  let  data :any={
    "parite":  this.form.value.parite , 
    
      "numDebut": Number( this.form.value.numDebut) ,
      "numFin":  Number( this.form.value.numFin) ,
     "typeVoi":{
      "codetype": this.form.value.codetype ,
      "npmtype":this.form.value.npmtype  },
      "nomvoi":this.form.value.nomvoi ,
   }
   this.tourneeService.posttournee(this.selectedfacteur,data).subscribe(()=>{
    this.router.navigate(['chefdash/tournee']).then(() => {
      window.location.reload();
    });  

   }) 
  
 }
 }
 
 
