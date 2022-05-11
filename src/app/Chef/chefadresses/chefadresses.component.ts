import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdressService } from 'src/app/services/adress.service';
import { TourneeService } from 'src/app/services/tournee.service';
import { AddaComponent } from './adda/adda.component';

@Component({
  selector: 'app-chefadresses',
  templateUrl: './chefadresses.component.html',
  styleUrls: ['./chefadresses.component.css']
})
export class ChefadressesComponent implements OnInit {
  form:FormGroup
  condition=false ; 
  constructor(private _snackBar: MatSnackBar,private addressService:AdressService,private fb:FormBuilder,public dialogueRef:MatDialog ,private TourneeService:TourneeService,private router:Router) {
    let formcontrols={
      title:new FormControl(),
      longitude:new FormControl(), 
      latitude:new FormControl(), 
      floor:new FormControl(), 
      apartNumber:new FormControl()
      }
     this.form=this.fb.group(formcontrols)
   }
   allAdresses:any[]=[];
   getalladresses():void{
     this.addressService.getallAdress().subscribe(res=>{
      this.allAdresses=res
      console.log( "hello ",this.allAdresses)
     })
   }
   adressAediter:any ; 
   editfunction(id:any){
     this.addressService.getAdressByid(id).subscribe(res=>{
      this.condition=true
    this.adressAediter=res 
      })     
   }

   selectedTournee:any;
   Function(id:any){
     this.selectedTournee=id
     console.log(id)
     }

  ngOnInit(): void {
  this.getalladresses()
  this.getalltournee()
   }
   val=false  ; 
  //  edit(){
  //   const  EditDialog=this.dialogueRef.open(EditcentreComponent);
  //   EditDialog.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
      
  //   });
  // }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddaComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchb: any ; 
  Tournee:any[]=[];
     getalltournee():void{
      this.TourneeService.getallTouree().subscribe(res=>{
         this.Tournee=res 
         console.log(this.Tournee)
      })
     }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.allAdresses=this.allAdresses.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    deleteAdress(id:string){
     this.addressService.deleteAdress(id).subscribe(()=>{   
      this.router.navigate(['chefdash/adresses'])
      .then(() => {
         window.location.reload();})
   })
    
  }
  editinfo():void{
    console.log("how",this.adressAediter)
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
    this.addressService.updateAdress(data,this.adressAediter._id).subscribe(res=>{
     setTimeout(() => {
      this.router.navigate(['chefdash/adresses']).then(() => {
        window.location.reload();
      });
      this._snackBar.open("Centre Editer", "Close");
     },2000);
    })
  }

}
