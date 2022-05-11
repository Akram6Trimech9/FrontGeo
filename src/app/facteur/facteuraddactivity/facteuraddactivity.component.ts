import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-facteuraddactivity',
  templateUrl: './facteuraddactivity.component.html',
  styleUrls: ['./facteuraddactivity.component.css']
})
export class FacteuraddactivityComponent implements OnInit {
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
  constructor(private AdressService:AdressService,private ActivityService:ActivityService,private route:ActivatedRoute) { }
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
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
ngOnInit(): void {
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
onSubmit(f:NgForm){
var formData = new FormData(); 
formData.append('title', f.value.title);
formData.append('image',this.fileName);
console.log("adress",this.selectedAdress,'value',f.value.title,'image',this.fileName,formData)
this.ActivityService.postActivity(this.selectedAdress,formData).subscribe(()=>{
  console.log("congrats")
})
}

}
