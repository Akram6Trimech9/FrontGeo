import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourneeService } from 'src/app/services/tournee.service';
@Component({
  selector: 'app-tournee',
  templateUrl: './tournee.component.html',
  styleUrls: ['./tournee.component.css']
})
export class TourneeComponent implements OnInit {
     constructor(private TourneeService:TourneeService,private router:Router) { }
  
    ngOnInit(): void {
      this.getalltournee()
    }

    searchb: any ; 
    Tournee:any[]=[];
    tourne : any ; 
    getalltournee():void{
        this.TourneeService.getallTouree().subscribe(res=>{
           this.Tournee=res 
           console.log(this.Tournee.forEach(el=>{
             console.log(el.parite)
           }))
         })
       }
    search(){
      if(this.searchb==""){
        this.ngOnInit();
      }else { 
        this.Tournee=this.Tournee.filter(res=>{
          return res.nom.toLocaleLowerCase().match(this.searchb)
        })
      }
      }
      deletecentre(id:string){
       this.TourneeService.deleteTourne(id).subscribe(()=>{   
     })
      this.router.navigate(['admin/tournee'])
   .then(() => {
      window.location.reload();})
    }
  
  }
  
 
