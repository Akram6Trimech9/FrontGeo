import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { panier } from 'src/app/Models/Panier';
import { ActivityService } from 'src/app/services/activity.service';
import { AdressService } from 'src/app/services/adress.service';
import { CentredisService } from 'src/app/services/centredis.service';
import { PanierService } from 'src/app/services/panier.service';
import { RegionsService } from 'src/app/services/regions.service';
 
@Component({
  selector: 'app-ineter-client',
  templateUrl: './ineter-client.component.html',
  styleUrls: ['./ineter-client.component.css']
})
export class IneterClientComponent implements OnInit {
  form!:FormGroup
  center: any = {
    lat:33.886917,
    lng:9.537499
  } ;

  // title='gmaps'
  // position={
  //   let:-34.681,
  //   lng:-58.371
  // }
  // label = {
  //   color:'yello',
  //   Text :'wiou'
  // }
  panier!:panier

  constructor(private addressService:AdressService, private panierService:PanierService,private centreService:CentredisService, private RegionService:RegionsService,private  fb:FormBuilder ,private ActivityService:ActivityService) { 
    let formcontrols={
      region: [null, Validators.required],
      }
     this.form=this.fb.group(formcontrols)
  }
  selectedregion:any;
idRegion:any
  Function(id:any){
    this.selectedregion=id
    console.log(id)
    this.idRegion=this.selectedregion; 
    }
//   onRegionChange(ob: { value: any; }) {
//     this.selectedregion = ob.value;
//    console.log(this.selectedregion);
//  }
 regions: any ; 

 getallregions(){
   this.RegionService.getAllRegion().subscribe(res=>{
     this.regions=res
   })
 }
  ngOnInit(): void {
    this.getallregions()
  this.getallactivities()
  }
  activities : any ; 
  getallactivities(): void {
    this.ActivityService.getallActivities().subscribe(res=>{
       this.activities=res ;
       console.log( this.activities)
       })
    
  }
  openInfo(){

  }
  centreInfo:any[]=[] ;
  //centres:any[]=[];


  markers:any[]=[] ;

  //  position={
  //    lat:0,
  //    lng:0
  //  } ; 


  //  label={
  //   color:"",
  //   text:"" 
  //  } ;


  //  options={
  //   animation:0 
  //  }

  //  title=""
  // openInfo(marker: MapMarker, content) {
  //   this.infoContent = content
  //   this.info.open(marker)
  // }
  idactivity:any ; 
  getActivity(id:any){
    console.log(id)
     this.idactivity=id}
  openthis(t:any,el:HTMLElement) {
    console.log(t)
    el.scrollIntoView()
    this.panier=new panier(this.idactivity,this.idRegion,t.id,t.title)
     console.log(this.panier,"wiou")
     this.valide()
  }
  open=true
  valide(){
      if(this.panier.NomCentre.length>0&&this.panier.NomRegion.length>0&&this.panier.nomActivity.length>0){
        this.open=false
      }   
  }
  variable=true ;
  Message='';
  onSubmit(f: NgForm):void{
    console.log(f.value)
    let userrecord:any={
     "region":this.panier.NomRegion,
     "address":this.panier.IdCentre,
     "Activity":this.panier.nomActivity,
     "nom":f.value.name,
     "prenom":f.value.prenom,
     "email":f.value.email
    }
    console.log(userrecord)
 this.panierService.AddPanier(userrecord).subscribe(()=>{
this.variable=false
this.Message="Thanks for contacting us! We will get in touch with you shortly."
 })
  }
  

   getaddressByRegion(){
   this.addressService.getaddressbyregion(this.selectedregion).subscribe(res=>{
  this.centreInfo=res;
  this.centreInfo.forEach(el=>{
     this.markers.push({
      position:{
        lat:Number(el.location.latitude),
        lng:Number(el.location.longitude)
      },
      label:{
        color:'red',
        text:el.title
      },
      options: { animation: google.maps.Animation.BOUNCE },
 title:el.title,
 id:el._id
     }
     )
  })
  console.log(this.markers)  
   })

   }


   
}
