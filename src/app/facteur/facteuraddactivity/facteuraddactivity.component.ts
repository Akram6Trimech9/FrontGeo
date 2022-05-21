import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';
import { AdressService } from 'src/app/services/adress.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { TourneeService } from 'src/app/services/tournee.service';
import { RegionsService } from 'src/app/services/regions.service';

@Component({
  selector: 'app-facteuraddactivity',
  templateUrl: './facteuraddactivity.component.html',
  styleUrls: ['./facteuraddactivity.component.css']
})
export class FacteuraddactivityComponent implements OnInit {
  form:FormGroup
  ; 
 constructor(private AdressService:AdressService,private _snackBar: MatSnackBar,private ActivityService:ActivityService,private route:ActivatedRoute,private fb:FormBuilder,private tourneeService:TourneeService,private router:Router,private RegionService:RegionsService) { 
  let formcontrols={
    title:new FormControl(),
    longitude:new FormControl(), 
    latitude:new FormControl(), 
    floor:new FormControl(), 
    apartNumber:new FormControl(),
    }
   this.form=this.fb.group(formcontrols)
 }
 selectedRegion:any;
 FunctionR(id:any){
   this.selectedRegion=id
   console.log(id)
   }
  @Input()
  requiredFileType!:string;
  fileName = '';
  uploadProgress!:number;
  uploadSub!: Subscription;
  selectedAdress:any;
    Function(id:any){
      this.selectedAdress=id
      console.log(id)
      }
      fileforb :any ;
   onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        this.fileforb=file;
        const formData = new FormData();
        formData.append("thumbnail", file);
        // const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        //     reportProgress: true,
        //     observe: 'events'
        // })
        // .pipe(
        //     finalize(() => this.reset())
        // );
      console.log(this.fileName,"wiw") 
    }
}

cancelUpload() {
this.uploadSub.unsubscribe();
this.reset();
}

reset() {
this.uploadProgress != null;
this.uploadSub != null;
}
adressoft:any[]=[]
adresses:any[]=[]
id:any
private routeSub!: Subscription;
regions:any[]=[]
ngOnInit(): void {
this.RegionService.getAllRegion().subscribe(res=>{
  this.regions=res;
})

  this.routeSub = this.route.params.subscribe(params => {
    console.log(params) 
    this.id=params['idtourne']
    console.log(params['idtourne']) 
  });
  this.AdressService.getallAdress().subscribe(res=>{
      this.adresses=res;
      console.log(this.adresses)
           this.adresses.forEach(el=>{
             if(el.tournee._id===this.id){
               this.adressoft.push(el)
               console.log("les adresse",this.adressoft)
             }
      })
  })
}
show:boolean=true;
addressId:any
addaddress(){
   const addressRecord:any={
     "title":this.form.value.title,
     "location":{
       "longitude":Number(this.form.value.longitude),
       "latitude":Number(this.form.value.latitude)
     },
     "building":{
       "floor":Number(this.form.value.floor),
       "apartNumber":Number(this.form.value.apartNumber)
     }
   };
  this.AdressService.postaddress(this.id,this.selectedRegion,addressRecord).subscribe(res=>{
    this.addressId=res._id;
    console.log(this.addressId)
    this.show=false
  })
}
onSubmit(f:NgForm){
var formData = new FormData(); 
formData.append('title', f.value.title);
formData.append('image',this.fileforb);
console.log("adress",this.addressId,'value',f.value.title,'image',this.fileName,formData)
this.ActivityService.postActivity(this.addressId,formData).subscribe(()=>{
  this._snackBar.open('activity added');
})

}
}
