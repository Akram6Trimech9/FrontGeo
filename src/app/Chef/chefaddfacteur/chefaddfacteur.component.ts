import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CentredisService } from 'src/app/services/centredis.service';
import { FacteurService } from 'src/app/services/facteur.service';
import { AddfComponent } from './addf/addf.component';

@Component({
  selector: 'app-chefaddfacteur',
  templateUrl: './chefaddfacteur.component.html',
  styleUrls: ['./chefaddfacteur.component.css']
})
export class ChefaddfacteurComponent implements OnInit {
  form:FormGroup
  condition=false ; 
  constructor(private _snackBar: MatSnackBar,private FacteurService:FacteurService,private fb:FormBuilder,public dialogueRef:MatDialog ,private CentreService:CentredisService,private router:Router) {
    let formcontrols={
      nom:new FormControl(),
      matricule:new FormControl(), 
      prenom:new FormControl(), 
      email:new FormControl(), 
      }
     this.form=this.fb.group(formcontrols)
   }
   allcentre:any[]=[];
   gettallcentre():void{
     this.CentreService.getallcentres().subscribe(res=>{
      this.allcentre=res
      console.log( "hello ",this.allcentre)
     })
   }
   centreaediter:any ; 
   editfunction(id:any){
     this.FacteurService.getfacteurbyid(id).subscribe(res=>{
      this.condition=true
    this.centreaediter=res 
      })     
   }

   selectedregion:any;
   Function(id:any){
     this.selectedregion=id
     console.log(id)
     }

  ngOnInit(): void {
  this.getallfacteur()
  this.gettallcentre()
  }
   val=false  ; 
  //  edit(){
  //   const  EditDialog=this.dialogueRef.open(EditcentreComponent);
  //   EditDialog.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
      
  //   });
  // }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddfComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchb: any ; 
  facteur:any[]=[];
     getallfacteur():void{
      this.FacteurService.getallfacteur().subscribe(res=>{
         this.facteur=res 
         console.log(this.facteur)
      })
     }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.facteur=this.facteur.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    deletecentre(id:string){
     this.FacteurService.deleteFacteur(id).subscribe(()=>{   
   })
    this.router.navigate(['chefdash/facteur'])
 .then(() => {
    window.location.reload();})
  }
  editinfo():void{
    console.log("how",this.centreaediter)
  let  data :any={
      "matricule":  this.form.value.matricule , 
      "nom":  this.form.value.nom , 
      "prenom":  this.form.value.prenom,
      "email":  this.form.value.email,
       "CentreDistribution":this.selectedregion}
    this.FacteurService.updatefacteur(data,this.centreaediter._id).subscribe(res=>{
     setTimeout(() => {
      this.router.navigate(['chefdash/facteur']).then(() => {
        window.location.reload();
      });
      this._snackBar.open("Centre Editer", "Close");
     },2000);
    })
  }

}
