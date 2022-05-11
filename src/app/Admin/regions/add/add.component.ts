import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegionsService } from 'src/app/services/regions.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
form:FormGroup
 ; 
constructor(private fb:FormBuilder,private RegionService:RegionsService,private router:Router) { 
  let formcontrols={
    Libelle:new FormControl(),
    longitude:new FormControl(), 
    latitude:new FormControl(), 
   }
  this.form=this.fb.group(formcontrols)
}

ngOnInit(): void {
}
addthis(){
 let  data :any={
   "Libelle":  this.form.value.Libelle , 
   "location":{
     "longitude" :Number(this.form.value.longitude),
     "latitude" :Number(this.form.value.latitude),}
  }

console.log(data)
  this.RegionService.Addregion(data).subscribe(res=>{
  })
  this.router.navigate(['admin/regions'])
  .then(() => {
    window.location.reload();
  });
}
}
