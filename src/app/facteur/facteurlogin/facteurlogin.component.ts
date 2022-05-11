import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Facteur, FacteurLoginDto } from 'src/app/Models/Facteur';
import { FacteurService } from 'src/app/services/facteur.service';

@Component({
  selector: 'app-facteurlogin',
  templateUrl: './facteurlogin.component.html',
  styleUrls: ['./facteurlogin.component.css']
})
export class FacteurloginComponent implements OnInit {
  facteur:any
  constructor(private FacteurService:FacteurService,private router:Router) {
    this.facteur=new  Facteur()

   }
   facteurlog!:FacteurLoginDto ; 
   invalidLogin!:Boolean ; 

  ngOnInit(): void {
  }

  FacteurID: any ; 
  onSubmit(f:NgForm) : void {
  console.log(f.value)
   this.FacteurService.GetTokenByid(f.value).subscribe((id)=>{
    console.log(id)
    this.invalidLogin=id===0 ; 

  if(!this.invalidLogin){
    this.router.navigate([`/facteurdash/`+id])
  }
})
 }
}
