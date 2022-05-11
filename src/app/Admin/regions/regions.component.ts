import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegionsService } from 'src/app/services/regions.service';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(public dialogueRef:MatDialog ,private RegionServices:RegionsService,private router:Router) { }

  ngOnInit(): void {
    this.getallRegions()
  }
   val=false  ; 
   edit(){
    const  EditDialog=this.dialogueRef.open(EditComponent);
    EditDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  openDialog() {
    const dialogRef = this.dialogueRef.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  searchb: any ; 
  Regions:any[]=[];
     getallRegions():void{
      this.RegionServices.getAllRegion().subscribe(res=>{
         this.Regions=res 
         console.log(this.Regions)
      })
     }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.Regions=this.Regions.filter(res=>{
        return res.Libelle.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    deleteRegion(id:string){
    this.RegionServices.DeleteRegion(id).subscribe(()=>{
      
    })
    this.router.navigate(['admin/regions'])
  .then(() => {
    window.location.reload();})
    }

}
