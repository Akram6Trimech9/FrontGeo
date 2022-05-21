import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-geointerface',
  templateUrl: './geointerface.component.html',
  styleUrls: ['./geointerface.component.css']
})
export class GeointerfaceComponent implements OnInit {

  constructor(private PanierService:PanierService,private router:Router) { }
  ngOnInit(): void {
    this.getAllpurchases()
  }
  searchb: any ; 
   panier:any[]=[];
  getAllpurchases(){
    this.PanierService.getAllpanier().subscribe(res=>{
   this.panier=res
   console.log(this.panier)
    })
  }
  deletePanier(id:any){
    this.PanierService.deletepanier(id).subscribe(()=>{
       
         window.location.reload();})
   }
  bool=true ; 
  panierdetails:any ; 
  showthis(id:any){
    this.PanierService.getpanierbyid(id).subscribe(res=>{
      this.panierdetails=res ;
      this.bool=false
      console.log("how are you",this.panierdetails.email  )

    })
  }
  search(){
    if(this.searchb==""){
      this.ngOnInit();
    }else { 
      this.panier=this.panier.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.searchb)
      })
    }
    }
    onSubmit(f:NgForm){
      let data:any={
        "ClientEmail":this.panierdetails.email,
        "Price":f.value.Price,
        "Message":f.value.Message,
      }
      console.log(data)
      this.PanierService.sendEmail(data).subscribe(res=>{
        console.log("Ok")
      })
    }
}

