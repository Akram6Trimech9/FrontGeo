import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    constructor(private activitiesService:ActivityService,private adresssService:AdressService,private router:Router) { }
  
    ngOnInit(): void {
      this.getAllActivities()
    }
    searchb: any ; 
    activities:any[]=[];
    getAllActivities():void{
        this.activitiesService.getallActivities().subscribe(res=>{
           this.activities=res 
           console.log(this.activities)
        })
       }
    search(){
      if(this.searchb==""){
        this.ngOnInit();
      }else { 
        this.activities=this.activities.filter(res=>{
          return res.title.toLocaleLowerCase().match(this.searchb)
        })
      }
      }
      deletecentre(id:string){
       this.activitiesService.deleteActivity(id).subscribe(()=>{   
        this.router.navigate(['admin/activity'])
        .then(() => {
           window.location.reload();})
     })
 
    }
    adresses:any[]=[];
     showthis(id:String){
         this.adresssService.getAdByactivity(id).subscribe(res=>{
          this.adresses=res ;
          console.log(this.adresses)
        })
    }
  
  }
  
 
