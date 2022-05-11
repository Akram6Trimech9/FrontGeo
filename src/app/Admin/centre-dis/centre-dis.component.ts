import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CentredisService } from 'src/app/services/centredis.service';
import { RegionsService } from 'src/app/services/regions.service';
import { AddcentreComponent } from './addcentre/addcentre.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-centre-dis',
  templateUrl: './centre-dis.component.html',
  styleUrls: ['./centre-dis.component.css']
})
export class CentreDisComponent implements OnInit {
  form:FormGroup
  condition=false ; 
  constructor(private _snackBar: MatSnackBar,private RegionService:RegionsService,private fb:FormBuilder,public dialogueRef:MatDialog ,private CentreService:CentredisService,private router:Router) {
    let formcontrols={
      nom:new FormControl(),
      tel:new FormControl(), 
      fax:new FormControl(), 
      longitude:new FormControl(), 
      latitude:new FormControl(), 
      region: [null, Validators.required],
      }
     this.form=this.fb.group(formcontrols)
   }
   allRegion:any[]=[];
   getallregions():void{
     this.RegionService.getAllRegion().subscribe(res=>{
      this.allRegion=res
      console.log( "hello ",this.allRegion)
     })
   }
   centreaediter:any ; 
   editfunction(id:any){
     this.CentreService.getcentreByid(id).subscribe(res=>{
  this.centreaediter=res ; 
  this.condition=true
     })     
   }

   selectedregion:any;
   Function(id:any){
     this.selectedregion=id
     console.log(id)
     }

  ngOnInit(): void {
    this.getallcentres()
    this.getallregions()
  }
   val=false  ; 
  //  edit(){
  //   const  EditDialog=this.dialogueRef.open(EditcentreComponent);
  //   EditDialog.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
      
  //   });
  // }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddcentreComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchb: any ; 
  centres:any[]=[];
     getallcentres():void{
      this.CentreService.getallcentres().subscribe(res=>{
         this.centres=res 
         console.log(this.centres)
      })
     }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.centres=this.centres.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    deletecentre(id:string){
     this.CentreService.deleteCentre(id).subscribe(()=>{   
   })
    this.router.navigate(['admin/centre'])
 .then(() => {
    window.location.reload();})
  }
  editinfo():void{
    let id:any
    id=this.centreaediter
    let  data :any={
      "nom":  this.form.value.nom , 
      "tel":  this.form.value.tel , 
      "fax":  this.form.value.fax,
      "location":{
        "longitude": Number( this.form.value.longitude),
        "latitude": Number(this.form.value.latitude),
      },
    "region":this.selectedregion}
    this.CentreService.UpdateCentre(data,id).subscribe(res=>{
     setTimeout(() => {
      this._snackBar.open("Centre Editer", "Close");
     },2000);
    })
  }

}
