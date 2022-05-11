import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentredisService } from 'src/app/services/centredis.service';
import { RegionsService } from 'src/app/services/regions.service';
 
@Component({
  selector: 'app-addcentre',
  templateUrl: './addcentre.component.html',
  styleUrls: ['./addcentre.component.css']
})
export class AddcentreComponent implements OnInit {
  form:FormGroup
  ; 
 constructor(private fb:FormBuilder,private CentreService:CentredisService,private RegionService:RegionsService,private router:Router) { 
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


 ngOnInit(): void {
  this.getallregions()
 }
 selectedregion:any;
 onRegionChange(ob: { value: any; }) {
   this.selectedregion = ob.value;
  console.log(this.selectedregion);
}
 allRegion:any[]=[];
 getallregions():void{
   this.RegionService.getAllRegion().subscribe(res=>{
    this.allRegion=res
    console.log( "hello ",this.allRegion)
   })
 }
 addthis(){
  let  data :any={
    "nom":  this.form.value.nom , 
    "tel":  this.form.value.tel , 
    "fax":  this.form.value.fax,
    "location":{
      "longitude": Number( this.form.value.longitude),
      "latitude": Number(this.form.value.latitude)
    }
     }
   this.CentreService.addcentre(data,this.selectedregion).subscribe(res=>{
    this.router.navigate(['admin/centre'])
    .then(() => {
      window.location.reload();
    });  
   })

  
 }
 }
 
 
