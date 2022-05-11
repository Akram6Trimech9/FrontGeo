import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';
import { TourneeService } from 'src/app/services/tournee.service';
import { AddtComponent } from './addt/addt.component';

@Component({
  selector: 'app-cheftournee',
  templateUrl: './cheftournee.component.html',
  styleUrls: ['./cheftournee.component.css']
})
export class CheftourneeComponent implements OnInit {
  form:FormGroup
  condition=false ; 
  constructor(private _snackBar: MatSnackBar,private TourneeService:TourneeService,private fb:FormBuilder,public dialogueRef:MatDialog  ,private router:Router,private FacteurService:FacteurService ) {
    let formcontrols={
      parite:new FormControl(),
      numDebut:new FormControl(), 
      numFin:new FormControl(), 
      codetype:new FormControl(), 
      npmtype:new FormControl(),
      nomvoi:new FormControl()

      }
     this.form=this.fb.group(formcontrols)
   }
   Alltournee:any[]=[];
   getalltournees():void{
     this.TourneeService.getallTouree().subscribe(res=>{
      this.Alltournee=res
      console.log( "hello ",this.Alltournee)
     })
   }
   tourneeAediter:any ; 
   editfunction(id:any){
     this.TourneeService.gettourneeByid(id).subscribe(res=>{
      this.condition=true
    this.tourneeAediter=res 
      })     
   }

   selectedFacteur:any;
   Function(id:any){
     this.selectedFacteur=id
     console.log(id)
     }

  ngOnInit(): void {
    this.getalltournees() 
    this.getallfacteurs()
   }
   val=false  ; 
  //  edit(){
  //   const  EditDialog=this.dialogueRef.open(EditcentreComponent);
  //   EditDialog.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
      
  //   });
  // }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddtComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchb: any ; 
  Facteurs:any[]=[];
     getallfacteurs():void{
      this.FacteurService.getallfacteur().subscribe(res=>{
         this.Facteurs=res 
         console.log(this.Facteurs)
      })
     }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.Alltournee=this.Alltournee.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    deleteAdress(id:string){
     this.TourneeService.deleteTourne(id).subscribe(()=>{   
      this.router.navigate(['chefdash/tournee'])
      .then(() => {
         window.location.reload();})
   })
  }
  editinfo():void{
    console.log("how",this.tourneeAediter)
  let  data :any={
      "parite":  this.form.value.parite , 
        "numDebut": Number( this.form.value.numDebut) ,
        "numFin":  Number( this.form.value.numFin) ,
      "typeVoi":{
        "codetype":  this.form.value.codetype ,
        "npmtype":   this.form.value.npmtype ,
      },
      "nomvoi":  this.form.value.nomvoi , 
    }
    this.TourneeService.updatetournee(data,this.tourneeAediter._id).subscribe(res=>{
     setTimeout(() => {
      this.router.navigate(['chefdash/tournee']).then(() => {
        window.location.reload();
      });
      this._snackBar.open("Centre Editer", "Close");
     },2000);
    })
  }

}
